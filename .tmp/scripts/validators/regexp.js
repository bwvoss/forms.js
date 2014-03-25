(function() {
  namespace('FormsJs.Form.Validators');

  FormsJs.Form.Validator.RegExp = (function() {
    function RegExp(options) {
      this.options = options;
      this.options;
    }

    RegExp.prototype.isValid = function(value) {
      return this.options.pattern.test(value) || value === '';
    };

    return RegExp;

  })();

}).call(this);
