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
      var validationFactory;
      validationFactory = new FormsJs.Validator.Factory;
      return _.all(this.data, (function(_this) {
        return function(element) {
          var value;
          value = FormsJs.Values.get(element, _this.scope);
          return _.all(element.validations, function(validator) {
            return validationFactory.build(validator).isValid(value, _this.scope);
          });
        };
      })(this));
    };

    Validator.prototype.errors = function() {
      return _.reduce(this.data, (function(_this) {
        return function(errors, element) {
          _.extend(errors, _this.getMessages(element, _this.scope));
          return errors;
        };
      })(this), {});
    };

    Validator.prototype.getMessages = function(element, scope) {
      var errorMessages, fieldErrors, validationFactory, value;
      fieldErrors = {};
      errorMessages = [];
      validationFactory = new FormsJs.Validator.Factory;
      value = FormsJs.Values.get(element, scope);
      _.each(element.validations, function(validator) {
        var valid;
        valid = validationFactory.build(validator).isValid(value, this.scope);
        if (!valid) {
          return errorMessages.push(validator.errorMessage);
        }
      });
      if (errorMessages.length !== 0) {
        fieldErrors[element.elementSelector] = errorMessages;
      }
      return fieldErrors;
    };

    return Validator;

  })();

}).call(this);
