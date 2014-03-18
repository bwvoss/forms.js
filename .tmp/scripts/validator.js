(function() {
  namespace('Form');

  Form.Validator = (function() {
    var addToErrorList, allValidations, getValue;

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

    getValue = function(data) {
      var value;
      switch (data.type) {
        case "text":
          value = $("[name=" + data.name + "]").val();
          break;
        case "select":
          value = $("[name=" + data.name + "]").val();
          break;
        case "radio":
          value = $("[name=" + data.name + "]:checked").val();
          break;
        case "checkbox":
          value = $("[name=" + data.name + "]:checked").val();
      }
      return value;
    };

    Validator.isValid = function(data) {
      var errorList, validations, value;
      errorList = [];
      validations = data.validations;
      value = getValue(data);
      if (allValidations(validations, value, data.name, errorList)) {
        return true;
      } else {
        return errorList;
      }
    };

    return Validator;

  })();

}).call(this);
