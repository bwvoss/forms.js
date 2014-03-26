(function() {
  namespace('FormsJs.Form.Validator');

  FormsJs.Form.Validator.MinLength = (function() {
    var DEFAULTLENGTH;

    DEFAULTLENGTH = 1;

    function MinLength(options) {
      this.options = options;
    }

    MinLength.prototype.isValid = function(value) {
      var length;
      length = this.options.length || this.DEFAULTLENGTH;
      return value.length >= length || value === '';
    };

    return MinLength;

  })();

}).call(this);
