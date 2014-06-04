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

  FormsJs.Form = (function() {
    var DEFAULT_SCOPE;

    DEFAULT_SCOPE = $(document);

    function Form(data, scope) {
      if (scope == null) {
        scope = DEFAULT_SCOPE;
      }
      this.data = data;
      this.scope = scope;
    }

    Form.prototype.populate = function() {
      return _.each(this.data, (function(_this) {
        return function(element) {
          return FormsJs.Populator.populate(element, _this.scope);
        };
      })(this));
    };

    Form.prototype.isValid = function() {
      return _.all(this.data, (function(_this) {
        return function(element) {
          var value;
          value = FormsJs.Values.get(element, _this.scope);
          return _.all(element.validations, function(validator) {
            return FormsJs.Validator.isValid(validator, value, _this.scope);
          });
        };
      })(this));
    };

    Form.prototype.errors = function() {
      return _.reduce(this.data, (function(_this) {
        return function(errors, element) {
          _.extend(errors, FormsJs.Errors.get(element, _this.scope));
          return errors;
        };
      })(this), {});
    };

    Form.prototype.serialize = function() {
      return _.reduce(this.data, (function(_this) {
        return function(formData, element) {
          _.extend(formData, FormsJs.Serializer.serialize(element, _this.scope));
          return formData;
        };
      })(this), {});
    };

    Form.prototype.clear = function() {
      return _.each(this.data, (function(_this) {
        return function(element) {
          return FormsJs.Clear.valueOf(element, _this.scope);
        };
      })(this));
    };

    return Form;

  })();

}).call(this);

(function() {
  namespace('FormsJs');

  FormsJs.Clear = (function() {
    function Clear() {}

    Clear.valueOf = function(element, scope) {
      if (element.type === 'radio' || element.type === 'checkbox') {
        return FormsJs.Scope.clearChecked(element, scope);
      } else {
        return FormsJs.Scope.clearValue(element, scope);
      }
    };

    return Clear;

  })();

}).call(this);

(function() {
  namespace('FormsJs');

  FormsJs.Errors = (function() {
    function Errors() {}

    Errors.get = function(data, scope) {
      var errorMessages, fieldErrors, value;
      fieldErrors = {};
      errorMessages = [];
      value = FormsJs.Values.get(data, scope);
      _.each(data.validations, function(validator) {
        var valid;
        valid = FormsJs.Validator.isValid(validator, value);
        if (!valid) {
          return errorMessages.push(validator.errorMessage);
        }
      });
      if (errorMessages.length !== 0) {
        fieldErrors[data.name] = errorMessages;
      }
      return fieldErrors;
    };

    return Errors;

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
    function Populator() {}

    Populator.populate = function(data, scope) {
      switch (data.type) {
        case FormsJs.InputTypes.RADIO:
          return FormsJs.Scope.setRadioChecked(data, scope);
        case FormsJs.InputTypes.CHECKBOX:
          return FormsJs.Scope.setAllChecked(data, scope);
        default:
          return FormsJs.Scope.setValue(data, scope);
      }
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
        return $("[name=" + data.name + "]", scope).val(data.value);
      }
    };

    Scope.setRadioChecked = function(data, scope) {
      return $("[name='" + data.name + "'][value='" + data.value + "']", scope).prop('checked', true);
    };

    Scope.setAllChecked = function(data, scope) {
      var value;
      if (_.isArray(data.value)) {
        value = data.value;
      } else {
        value = [data.value];
      }
      return $("[name='" + data.name + "']", scope).val(value);
    };

    Scope.getValue = function(data, scope) {
      return $("[name=" + data.name + "]", scope).val();
    };

    Scope.getCheckedRadioValue = function(data, scope) {
      return $("[name=" + data.name + "]:checked", scope).val();
    };

    Scope.getCheckedValues = function(data, scope) {
      return $("[name=" + data.name + "]:checked", scope).map(function() {
        return this.value;
      }).get();
    };

    Scope.clearValue = function(data, scope) {
      return $("[name=" + data.name + "]", scope).val('');
    };

    Scope.clearChecked = function(data, scope) {
      return $("[name='" + data.name + "']", scope).prop('checked', false);
    };

    return Scope;

  })();

}).call(this);

(function() {
  namespace('FormsJs');

  FormsJs.Serializer = (function() {
    function Serializer() {}

    Serializer.serialize = function(element, scope) {
      var formData, value;
      formData = {};
      value = FormsJs.Values.get(element, scope);
      formData[element.name] = value;
      return formData;
    };

    return Serializer;

  })();

}).call(this);

(function() {
  namespace('FormsJs');

  FormsJs.Validator = (function() {
    function Validator() {}

    Validator.isValid = function(validator, value, scope) {
      var validationFactory;
      validationFactory = new FormsJs.Validator.Factory;
      return validationFactory.build(validator).isValid(value, scope);
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
        name: this.options.matchField
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
    function Required(options) {
      this.options = options;
    }

    Required.prototype.isValid = function(value) {
      return value !== '' && value !== void 0;
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
