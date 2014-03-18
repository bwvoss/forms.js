(function() {
  namespace('Form');

  Form.Errors = (function() {
    function Errors() {}

    Errors.apply = function(data) {
      return $("span[name=" + data.name + "]").text(data.errorMessage);
    };

    return Errors;

  })();

}).call(this);
