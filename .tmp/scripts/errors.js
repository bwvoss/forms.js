(function() {
  namespace('FormsJs.Form');

  FormsJs.Form.Errors = (function() {
    var addToErrorList;

    function Errors() {}

    Errors.apply = function(data) {
      return $("span[name=" + data.name + "]").text(data.errorMessage);
    };

    addToErrorList = function(errorList, name, message) {
      var error;
      error = {
        name: name,
        errorMessage: message
      };
      return errorList.push(error);
    };

    return Errors;

  })();

}).call(this);
