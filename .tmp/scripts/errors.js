(function() {
  namespace('FormsJs.Form');

  FormsJs.Form.Errors = (function() {
    var addToErrorList;

    function Errors() {}

    addToErrorList = function(errorList, name, message) {
      var error;
      error = {
        name: name,
        errorMessage: message
      };
      return errorList.push(error);
    };

    Errors.get = function(data) {
      var errorsList;
      return errorsList = [];
    };

    return Errors;

  })();

}).call(this);
