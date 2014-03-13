(function() {
  namespace('Form.Validator');

  Form.Validator.MaxLength = (function() {
    function MaxLength() {}

    MaxLength.prototype.isValid = function(value, maxChars) {
      if (value.length <= maxChars) {
        return true;
      } else {
        return false;
      }
    };

    return MaxLength;

  })();

}).call(this);
