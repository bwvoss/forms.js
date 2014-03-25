(function() {
  namespace('FormsJs.Form.Validator');

  FormsJs.Form.Validator.MinLength = (function() {
    function MinLength(options) {
      this.options = options;
      this.options;
    }

    MinLength.prototype.isValid = function(value) {
      return value.length >= this.options.length || value === '';
    };

    return MinLength;

  })();

}).call(this);
