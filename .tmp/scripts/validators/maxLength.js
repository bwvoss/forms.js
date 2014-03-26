(function() {
  namespace('FormsJs.Form.Validator');

  FormsJs.Form.Validator.MaxLength = (function() {
    var DEFAULTLENGTH;

    DEFAULTLENGTH = 4096;

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
