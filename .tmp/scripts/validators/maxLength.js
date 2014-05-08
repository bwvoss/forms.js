(function() {
  namespace('FormsJs.Validator');

  FormsJs.Validator.MaxLength = (function() {
    MaxLength.prototype.DEFAULTLENGTH = 1000000;

    function MaxLength(options) {
      this.options = options;
    }

    MaxLength.prototype.isValid = function(value) {
      var length;
      length = this.options.length || this.DEFAULTLENGTH;
      return value.length <= length;
    };

    return MaxLength;

  })();

}).call(this);
