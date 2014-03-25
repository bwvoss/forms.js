(function() {
  namespace('FormsJs.Form.Validator');

  FormsJs.Form.Validator.MaxLength = (function() {
    function MaxLength() {}

    MaxLength.prototype.isValid = function(value, maxChars) {
      return value.length <= maxChars;
    };

    return MaxLength;

  })();

}).call(this);
