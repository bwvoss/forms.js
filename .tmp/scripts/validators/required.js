(function() {
  namespace('FormsJs.Validator');

  FormsJs.Validator.Required = (function() {
    function Required(options) {
      this.options = options;
    }

    Required.prototype.isValid = function(value) {
      return value !== '' && value !== void 0;
    };

    return Required;

  })();

}).call(this);
