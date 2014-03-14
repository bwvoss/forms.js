(function() {
  namespace('Form');

  Form.Validator = (function() {
    var addToErrorList, allValidations;

    function Validator() {}

    allValidations = function(validations, value, name, errorList) {
      var validationFactory;
      validationFactory = new Form.Validator.Factory;
      return _.all(validations, (function(_this) {
        return function(validation) {
          if ((validationFactory.build(validation.type)).isValid(value, validation.length)) {
            return true;
          } else {
            addToErrorList(errorList, name, validation.errorMessage);
            return false;
          }
        };
      })(this));
    };

    addToErrorList = function(errorList, name, message) {
      var error;
      error = {
        name: name,
        errorMessage: message
      };
      return errorList.push(error);
    };

    Validator.isValid = function(data) {
      var errorList, validations, value;
      errorList = [];
      validations = data.validations;
      value = $("[name=" + data.name + "]").val();
      if (allValidations(validations, value, data.name, errorList)) {
        return true;
      } else {
        return errorList;
      }
    };

    return Validator;

  })();

}).call(this);
