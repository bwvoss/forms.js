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
