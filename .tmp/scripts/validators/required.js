(function() {
  namespace('FormsJs.Form.Validator');

  FormsJs.Form.Validator.Required = (function() {
    function Required() {}

    Required.prototype.isValid = function(value) {
      return value !== '' && value !== void 0;
    };

    return Required;

  })();

}).call(this);
