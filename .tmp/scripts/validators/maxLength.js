(function() {
  namespace('FormsJs.Form.Validator');

  FormsJs.Form.Validator.MaxLength = (function() {
    function MaxLength(options) {
      this.options = options;
      this.options;
    }

    MaxLength.prototype.isValid = function(value) {
      return value.length <= this.options.length;
    };

    return MaxLength;

  })();

}).call(this);
