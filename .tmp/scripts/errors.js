(function() {
  namespace('FormsJs.Form');

  FormsJs.Form.Errors = (function() {
    function Errors() {}

    Errors.get = function(data) {
      var errorsList, value;
      errorsList = [];
      value = FormsJs.Form.Values.get(data);
      _.each(data.validations, function(validator) {
        var valid;
        valid = FormsJs.Form.Validator.isValid(validator, value);
        if (!valid) {
          return errorsList.push(validator.errorMessage);
        }
      });
      return errorsList;
    };

    return Errors;

  })();

}).call(this);
