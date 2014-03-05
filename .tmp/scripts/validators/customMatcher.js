(function() {
  namespace('FormsJs.Form.Validator');

  FormsJs.Form.Validator.CustomMatcher = (function() {
    function CustomMatcher(options) {
      this.options = options;
    }

    CustomMatcher.prototype.defaultMatcher = function(value) {
      return true;
    };

    CustomMatcher.prototype.isValid = function(value) {
      var matcher;
      matcher = this.options.matcher || this.defaultMatcher;
      return matcher(value);
    };

    return CustomMatcher;

  })();

}).call(this);
