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
