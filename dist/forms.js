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
    function Form(data, context) {
      if (context == null) {
        context = 'body';
      }
      this.data = data;
      this.context = context;
    }

    Form.prototype.populate = function() {
      return _.each(this.data, function(element) {
        return FormsJs.Populator.populate(element);
      });
    };

    Form.prototype.isValid = function() {
      return _.all(this.data, function(element) {
        var value;
        value = FormsJs.Values.get(element);
        return _.all(element.validations, function(validator) {
          return FormsJs.Validator.isValid(validator, value);
        });
      });
    };

    Form.prototype.errors = function() {
      return _.reduce(this.data, function(errors, element) {
        _.extend(errors, FormsJs.Errors.get(element));
        return errors;
      }, {});
    };

    Form.prototype.serialize = function() {
      return _.reduce(this.data, function(formData, element) {
        _.extend(formData, FormsJs.Serializer.serialize(element));
        return formData;
      }, {});
    };

    Form.prototype.clear = function() {
      return _.each(this.data, function(element) {
        return FormsJs.Clear.valueOf(element);
      });
    };

    return Form;

  })();

}).call(this);

(function() {
  namespace('FormsJs');

  FormsJs.Clear = (function() {
    function Clear() {}

    Clear.valueOf = function(element) {
      if (element.type === 'radio' || element.type === 'checkbox') {
        return $("[name=" + element.name + "]").prop('checked', false);
      } else {
        return $("[name=" + element.name + "]").val('');
      }
    };

    return Clear;

  })();

}).call(this);

(function() {
  namespace('FormsJs');

  FormsJs.Errors = (function() {
    function Errors() {}

    Errors.get = function(data) {
      var errorMessages, fieldErrors, value;
      fieldErrors = {};
      errorMessages = [];
      value = FormsJs.Values.get(data);
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

    Populator.populate = function(data) {
      switch (data.type) {
        case FormsJs.InputTypes.RADIO:
          return this.setChecked(data);
        case FormsJs.InputTypes.CHECKBOX:
          return this.setAllChecked(data);
        default:
          return this.setValue(data);
      }
    };

    Populator.setValue = function(data) {
      return $("[name='" + data.name + "']").val(data.value);
    };

    Populator.setChecked = function(data) {
      return $("[name='" + data.name + "'][value='" + data.value + "']").prop('checked', true);
    };

    Populator.setAllChecked = function(data) {
      var value;
      if (_.isArray(data.value)) {
        value = data.value;
      } else {
        value = [data.value];
      }
      return $("[name='" + data.name + "']").val(value);
    };

    return Populator;

  })();

}).call(this);

(function() {
  namespace('FormsJs');

  FormsJs.Serializer = (function() {
    function Serializer() {}

    Serializer.serialize = function(element) {
      var formData, value;
      formData = {};
      value = FormsJs.Values.get(element);
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

    Validator.isValid = function(validator, value) {
      var validationFactory;
      validationFactory = new FormsJs.Validator.Factory;
      return validationFactory.build(validator).isValid(value);
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

    MatchingInput.prototype.isValid = function(value) {
      var fieldValue, matchField;
      matchField = this.options.matchField;
      fieldValue = $("[name=" + matchField + "]").val() || value;
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
    function Values() {}

    Values.DEFAULTVALUE = '';

    Values.get = function(data) {
      var value;
      switch (data.type) {
        case FormsJs.InputTypes.RADIO:
          value = this.radioValue(data.name);
          break;
        case FormsJs.InputTypes.CHECKBOX:
          value = this.checkedValues(data.name);
          break;
        default:
          value = this.textValue(data.name);
      }
      return value = value || this.DEFAULTVALUE;
    };

    Values.textValue = function(name) {
      return $("[name='" + name + "']").val();
    };

    Values.radioValue = function(name) {
      return $("[name='" + name + "']:checked").val();
    };

    Values.checkedValues = function(name) {
      return $("[name='" + name + "']:checked").map(function() {
        return this.value;
      }).get();
    };

    return Values;

  })();

}).call(this);
