(function() {
  namespace('FormsJs.Form.Validators');

  FormsJs.Form.Validator.Custom = (function() {
    function Custom() {}

    Custom.prototype.isValid = function(value, length, regEx) {
      regEx = new RegExp(regEx);
      return regEx.test(value) || value === '';
    };

    return Custom;

  })();

}).call(this);
