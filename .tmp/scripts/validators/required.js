(function() {
  namespace('FormsJs.Form.Validator');

  FormsJs.Form.Validator.Required = (function() {
    function Required(options) {
      this.options = options;
      this.options;
    }

    Required.prototype.isValid = function(value) {
      return value !== '' && value !== void 0;
    };

    return Required;

  })();

}).call(this);
