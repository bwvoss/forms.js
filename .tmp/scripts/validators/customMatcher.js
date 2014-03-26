(function() {
  namespace('FormsJs.Form.Validators');

  FormsJs.Form.Validator.CustomMatcher = (function() {
    function CustomMatcher(options) {
      this.options = options;
      this.options;
    }

    CustomMatcher.prototype.isValid = function(value) {
      return this.options.matcher(value);
    };

    return CustomMatcher;

  })();

}).call(this);
