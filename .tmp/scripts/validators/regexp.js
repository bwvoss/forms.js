(function() {
  namespace('FormsJs.Form.Validators');

  FormsJs.Form.Validator.RegExp = (function() {
    function RegExp() {}

    RegExp.prototype.isValid = function(value, length, regExp) {
      return regExp.test(value) || value === '';
    };

    return RegExp;

  })();

}).call(this);
