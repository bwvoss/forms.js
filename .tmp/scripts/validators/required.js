(function() {
  namespace('Form.Validator');

  Form.Validator.Required = (function() {
    function Required() {}

    Required.prototype.isValid = function(value) {
      if (value === '') {
        return false;
      } else {
        return true;
      }
    };

    return Required;

  })();

}).call(this);
