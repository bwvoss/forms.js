(function(underscore) {
  'use strict';

  window.namespace = function(string, obj) {
    var current = window,
        names = string.split('.'),
        name;

    while((name = names.shift())) {
      current[name] = current[name] || {};
      current = current[name];
    }

    underscore.extend(current, obj);

  };

}(window._));

(function() {
  namespace('FormsJs');

  FormsJs.Defaults = (function() {
    function Defaults() {}

    Defaults.SCOPE = $(document);

    return Defaults;

  })();

}).call(this);

(function() {
  namespace('FormsJs');

  FormsJs.InputTypes = (function() {
    function InputTypes() {}

    InputTypes.TEXT = 'text';

    InputTypes.RADIO = 'radio';

    InputTypes.CHECKBOX = 'checkbox';

    InputTypes.SELECT = 'select';

    InputTypes.PASSWORD = 'password';

    return InputTypes;

  })();

}).call(this);

(function() {
  namespace('FormsJs');

  FormsJs.Populator = (function() {
    function Populator(data, scope) {
      if (scope == null) {
        scope = FormsJs.Defaults.SCOPE;
      }
      this.data = data;
      this.scope = scope;
    }

    Populator.prototype.populate = function() {
      return _.each(this.data, (function(_this) {
        return function(element) {
          switch (element.type) {
            case FormsJs.InputTypes.RADIO:
              return FormsJs.Scope.setRadioChecked(element, _this.scope);
            case FormsJs.InputTypes.CHECKBOX:
              return FormsJs.Scope.setAllChecked(element, _this.scope);
            default:
              return FormsJs.Scope.setValue(element, _this.scope);
          }
        };
      })(this));
    };

    return Populator;

  })();

}).call(this);

(function() {
  namespace('FormsJs');

  FormsJs.Scope = (function() {
    function Scope() {}

    Scope.setValue = function(data, scope) {
      if (data.value !== void 0) {
        return $(data.elementSelector, scope).val(data.value);
      }
    };

    Scope.setRadioChecked = function(data, scope) {
      return $("" + data.elementSelector + "[value='" + data.value + "']", scope).prop('checked', true);
    };

    Scope.setAllChecked = function(data, scope) {
      var value;
      if (_.isArray(data.value)) {
        value = data.value;
      } else {
        value = [data.value];
      }
      return $(data.elementSelector, scope).val(value);
    };

    Scope.getValue = function(data, scope) {
      return $(data.elementSelector, scope).val();
    };

    Scope.getName = function(data, scope) {
      return $(data.elementSelector, scope).attr('name');
    };

    Scope.getCheckedRadioValue = function(data, scope) {
      return $("" + data.elementSelector + ":checked", scope).val();
    };

    Scope.getCheckedValues = function(data, scope) {
      return $("" + data.elementSelector + ":checked", scope).map(function() {
        return this.value;
      }).get();
    };

    Scope.clearValue = function(data, scope) {
      return $(data.elementSelector, scope).val('');
    };

    Scope.clearChecked = function(data, scope) {
      return $(data.elementSelector, scope).prop('checked', false);
    };

    return Scope;

  })();

}).call(this);

(function() {
  namespace('FormsJs');

  FormsJs.Serializer = (function() {
    function Serializer(data, scope) {
      if (scope == null) {
        scope = FormsJs.Defaults.SCOPE;
      }
      this.data = data;
      this.scope = scope;
    }

    Serializer.prototype.serialize = function() {
      return _.reduce(this.data, (function(_this) {
        return function(formData, element) {
          _.extend(formData, _this.getFormData(element));
          return formData;
        };
      })(this), {});
    };

    Serializer.prototype.getFormData = function(element) {
      var formData, key, value;
      formData = {};
      value = FormsJs.Values.get(element, this.scope);
      key = this.getKey(element);
      formData[key] = value;
      return formData;
    };

    Serializer.prototype.getKey = function(element) {
      if (element.dataKey) {
        return element.dataKey;
      } else {
        return FormsJs.Scope.getName(element, this.scope);
      }
    };

    return Serializer;

  })();

}).call(this);

(function() {
  namespace('FormsJs');

  FormsJs.Validator = (function() {
    function Validator(data, scope) {
      if (scope == null) {
        scope = FormsJs.Defaults.SCOPE;
      }
      this.data = data;
      this.scope = scope;
    }

    Validator.prototype.isValid = function() {
      return _.all(this.data, (function(_this) {
        return function(element) {
          var value;
          value = FormsJs.Values.get(element, _this.scope);
          return _this._checkAllValidations(element.validations, value);
        };
      })(this));
    };

    Validator.prototype.errors = function() {
      return _.reduce(this.data, (function(_this) {
        return function(errors, element) {
          _.extend(errors, _this._getSelectorAndErrors(element));
          return errors;
        };
      })(this), {});
    };

    Validator.prototype._getSelectorAndErrors = function(element) {
      var fieldErrors, messages, valid, value;
      fieldErrors = {};
      value = FormsJs.Values.get(element, this.scope);
      valid = this._checkAllValidations(element.validations, value);
      if (!valid) {
        messages = this._getMessages(element);
        fieldErrors[element.elementSelector] = messages;
      }
      return fieldErrors;
    };

    Validator.prototype._checkAllValidations = function(validations, value) {
      var validationFactory;
      validationFactory = new FormsJs.Validator.Factory;
      return _.all(validations, (function(_this) {
        return function(validator) {
          return validationFactory.build(validator).isValid(value, _this.scope);
        };
      })(this));
    };

    Validator.prototype._getMessages = function(element) {
      var errorMessages;
      errorMessages = [];
      _.each(element.validations, function(validator) {
        return errorMessages.push(validator.errorMessage);
      });
      return errorMessages;
    };

    return Validator;

  })();

}).call(this);

(function() {
  namespace('FormsJs.Validator');

  FormsJs.Validator.CustomMatcher = (function() {
    function CustomMatcher(options) {
      this.options = options;
    }

    CustomMatcher.prototype.defaultMatcher = function(value) {
      return true;
    };

    CustomMatcher.prototype.isValid = function(value) {
      var matcher;
      matcher = this.options.matcher || this.defaultMatcher;
      return matcher(value);
    };

    return CustomMatcher;

  })();

}).call(this);

(function() {
  namespace('FormsJs.Validator');

  FormsJs.Validator.Email = (function() {
    Email.prototype.EMAILREGEXP = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

    function Email(options) {
      this.options = options;
    }

    Email.prototype.isValid = function(value) {
      return this.EMAILREGEXP.test(value) || value === '';
    };

    return Email;

  })();

}).call(this);

(function() {
  namespace('FormsJs.Validator');

  FormsJs.Validator.Factory = (function() {
    function Factory() {}

    Factory.prototype.build = function(validation) {
      switch (validation.type) {
        case 'required':
          return new FormsJs.Validator.Required(validation);
        case 'email':
          return new FormsJs.Validator.Email(validation);
        case 'maxLength':
          return new FormsJs.Validator.MaxLength(validation);
        case 'minLength':
          return new FormsJs.Validator.MinLength(validation);
        case 'regExp':
          return new FormsJs.Validator.RegExp(validation);
        case 'matchingInput':
          return new FormsJs.Validator.MatchingInput(validation);
        default:
          return new FormsJs.Validator.CustomMatcher(validation);
      }
    };

    return Factory;

  })();

}).call(this);

(function() {
  namespace('FormsJs.Validator');

  FormsJs.Validator.MatchingInput = (function() {
    function MatchingInput(options) {
      this.options = options;
    }

    MatchingInput.prototype.isValid = function(value, scope) {
      var fieldValue, matchField;
      matchField = {
        elementSelector: this.options.matchField
      };
      fieldValue = FormsJs.Scope.getValue(matchField, scope) || value;
      return fieldValue === value;
    };

    return MatchingInput;

  })();

}).call(this);

(function() {
  namespace('FormsJs.Validator');

  FormsJs.Validator.MaxLength = (function() {
    MaxLength.prototype.DEFAULTLENGTH = 1000000;

    function MaxLength(options) {
      this.options = options;
    }

    MaxLength.prototype.isValid = function(value) {
      var length;
      length = this.options.length || this.DEFAULTLENGTH;
      return value.length <= length;
    };

    return MaxLength;

  })();

}).call(this);

(function() {
  namespace('FormsJs.Validator');

  FormsJs.Validator.MinLength = (function() {
    MinLength.prototype.DEFAULTLENGTH = 1;

    function MinLength(options) {
      this.options = options;
    }

    MinLength.prototype.isValid = function(value) {
      var length;
      length = this.options.length || this.DEFAULTLENGTH;
      return value.length >= length || value === '';
    };

    return MinLength;

  })();

}).call(this);

(function() {
  namespace('FormsJs.Validator');

  FormsJs.Validator.RegExp = (function() {
    RegExp.prototype.DEFAULTREGEXP = /[^]+/;

    function RegExp(options) {
      this.options = options;
    }

    RegExp.prototype.isValid = function(value) {
      var anything, pattern;
      anything = /[^]+/;
      pattern = this.options.pattern || this.DEFAULTREGEXP;
      return pattern.test(value) || value === '';
    };

    return RegExp;

  })();

}).call(this);

(function() {
  namespace('FormsJs.Validator');

  FormsJs.Validator.Required = (function() {
    var FILLED_STRING_REGEXP;

    FILLED_STRING_REGEXP = /\S/;

    function Required(options) {
      this.options = options;
    }

    Required.prototype.isValid = function(value) {
      return !this.isEmpty(value);
    };

    Required.prototype.isEmpty = function(value) {
      switch (typeof value) {
        case 'number':
        case 'boolean':
          return false;
        case 'string':
          return this.isEmptyString(value);
        case 'object':
          return this.isEmptyObject(value);
        default:
          return true;
      }
    };

    Required.prototype.isEmptyString = function(value) {
      return !value.match(FILLED_STRING_REGEXP);
    };

    Required.prototype.isEmptyObject = function(value) {
      return value.length === 0;
    };

    return Required;

  })();

}).call(this);

(function() {
  namespace('FormsJs.Form');

  FormsJs.Values = (function() {
    var DEFAULT_VALUE;

    function Values() {}

    DEFAULT_VALUE = '';

    Values.get = function(data, scope) {
      var value;
      switch (data.type) {
        case FormsJs.InputTypes.RADIO:
          value = FormsJs.Scope.getCheckedRadioValue(data, scope);
          break;
        case FormsJs.InputTypes.CHECKBOX:
          value = FormsJs.Scope.getCheckedValues(data, scope);
          break;
        default:
          value = FormsJs.Scope.getValue(data, scope);
      }
      return value != null ? value : value = DEFAULT_VALUE;
    };

    return Values;

  })();

}).call(this);
