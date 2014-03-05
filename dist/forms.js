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
    function Form(data) {
      this.data = data;
    }

    Form.prototype.populate = function() {
      return _.each(this.data, function(element) {
        return FormsJs.Form.Populator.populate(element);
      });
    };

    Form.prototype.isValid = function() {
      return _.all(this.data, function(element) {
        var value;
        value = FormsJs.Form.Values.get(element);
        return _.all(element.validations, function(validator) {
          return FormsJs.Form.Validator.isValid(validator, value);
        });
      });
    };

    Form.prototype.errors = function() {
      return _.reduce(this.data, function(errors, element) {
        _.extend(errors, FormsJs.Form.Errors.get(element));
        return errors;
      }, {});
    };

    Form.prototype.serialize = function() {
      return _.reduce(this.data, function(formData, element) {
        _.extend(formData, FormsJs.Form.Serializer.serialize(element));
        return formData;
      }, {});
    };

    Form.prototype.clear = function() {
      return FormsJs.Form.Clear.all();
    };

    return Form;

  })();

}).call(this);

(function() {
  namespace('FormsJs.Form');

  FormsJs.Form.Clear = (function() {
    function Clear() {}

    Clear.all = function() {
      return $('form *').filter(':input').each(this.clearValue);
    };

    Clear.clearValue = function() {
      if (this.type === 'radio' || this.type === 'checkbox') {
        return $(this).prop('checked', false);
      } else {
        return $(this).val('');
      }
    };

    return Clear;

  })();

}).call(this);

(function() {
  namespace('FormsJs.Form');

  FormsJs.Form.Errors = (function() {
    function Errors() {}

    Errors.get = function(data) {
      var errorMessages, fieldErrors, value;
      fieldErrors = {};
      errorMessages = [];
      value = FormsJs.Form.Values.get(data);
      _.each(data.validations, function(validator) {
        var valid;
        valid = FormsJs.Form.Validator.isValid(validator, value);
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
  namespace('FormsJs.Form');

  FormsJs.Form.InputTypes = (function() {
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
  namespace('FormsJs.Form');

  FormsJs.Form.Populator = (function() {
    var setAllChecked, setChecked, setValue;

    function Populator() {}

    setValue = function(data) {
      return $("[name='" + data.name + "']").val(data.value);
    };

    setChecked = function(data) {
      return $("[name='" + data.name + "'][value='" + data.value + "']").prop('checked', true);
    };

    setAllChecked = function(data) {
      var value;
      if (_.isArray(data.value)) {
        value = data.value;
      } else {
        value = [data.value];
      }
      return $("[name='" + data.name + "']").val(value);
    };

    Populator.populate = function(data) {
      switch (data.type) {
        case FormsJs.Form.InputTypes.TEXT:
          return setValue(data);
        case FormsJs.Form.InputTypes.RADIO:
          return setChecked(data);
        case FormsJs.Form.InputTypes.CHECKBOX:
          return setAllChecked(data);
        case FormsJs.Form.InputTypes.SELECT:
          return setValue(data);
        case FormsJs.Form.InputTypes.PASSWORD:
          return setValue(data);
        default:
          return setValue(data);
      }
    };

    return Populator;

  })();

}).call(this);

(function() {
  namespace('FormsJs.Form');

  FormsJs.Form.Serializer = (function() {
    function Serializer() {}

    Serializer.serialize = function(element) {
      var formData, value;
      formData = {};
      value = FormsJs.Form.Values.get(element);
      formData[element.name] = value;
      return formData;
    };

    return Serializer;

  })();

}).call(this);

(function() {
  namespace('FormsJs.Form');

  FormsJs.Form.Validator = (function() {
    function Validator() {}

    Validator.isValid = function(validator, value) {
      var validationFactory;
      validationFactory = new FormsJs.Form.Validator.Factory;
      return validationFactory.build(validator).isValid(value);
    };

    return Validator;

  })();

}).call(this);

(function() {
  namespace('FormsJs.Form.Validator');

  FormsJs.Form.Validator.CustomMatcher = (function() {
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
  namespace('FormsJs.Form.Validator');

  FormsJs.Form.Validator.Email = (function() {
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
  namespace('FormsJs.Form.Validator');

  FormsJs.Form.Validator.Factory = (function() {
    function Factory() {}

    Factory.prototype.build = function(validation) {
      switch (validation.type) {
        case 'required':
          return new FormsJs.Form.Validator.Required(validation);
        case 'email':
          return new FormsJs.Form.Validator.Email(validation);
        case 'maxLength':
          return new FormsJs.Form.Validator.MaxLength(validation);
        case 'minLength':
          return new FormsJs.Form.Validator.MinLength(validation);
        case 'regExp':
          return new FormsJs.Form.Validator.RegExp(validation);
        case 'matchingInput':
          return new FormsJs.Form.Validator.MatchingInput(validation);
        default:
          return new FormsJs.Form.Validator.CustomMatcher(validation);
      }
    };

    return Factory;

  })();

}).call(this);

(function() {
  namespace('FormsJs.Form.Validator');

  FormsJs.Form.Validator.MatchingInput = (function() {
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
  namespace('FormsJs.Form.Validator');

  FormsJs.Form.Validator.MaxLength = (function() {
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
  namespace('FormsJs.Form.Validator');

  FormsJs.Form.Validator.MinLength = (function() {
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
  namespace('FormsJs.Form.Validator');

  FormsJs.Form.Validator.RegExp = (function() {
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
  namespace('FormsJs.Form.Validator');

  FormsJs.Form.Validator.Required = (function() {
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

  FormsJs.Form.Values = (function() {
    function Values() {}

    Values.DEFAULTVALUE = '';

    Values.get = function(data) {
      var value;
      switch (data.type) {
        case FormsJs.Form.InputTypes.TEXT:
          value = this.textValue(data.name);
          break;
        case FormsJs.Form.InputTypes.SELECT:
          value = this.textValue(data.name);
          break;
        case FormsJs.Form.InputTypes.RADIO:
          value = this.radioValue(data.name);
          break;
        case FormsJs.Form.InputTypes.CHECKBOX:
          value = this.checkedValues(data.name);
          break;
        case FormsJs.Form.InputTypes.PASSWORD:
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
