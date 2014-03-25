(function() {
  namespace('FormsJs.Form.Validator');

  FormsJs.Form.Validator.MinLength = (function() {
    function MinLength() {}

    MinLength.prototype.isValid = function(value, minChars) {
      return value.length >= minChars || value === '';
    };

    return MinLength;

  })();

}).call(this);
