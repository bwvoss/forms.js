(function() {
  namespace('FormsJs.Validator');

  FormsJs.Validator.RegExp = (function() {
    RegExp.prototype.DEFAULTREGEXP = /[^]+/;

    function RegExp(options) {
      this.options = options;
    }

    RegExp.prototype.isValid = function(value) {
      var anything, pattern;
      anything = /[^]+/;
      pattern = this.options.pattern || this.DEFAULTREGEXP;
      return pattern.test(value) || value === '';
    };

    return RegExp;

  })();

}).call(this);
