(function() {
  namespace('FormsJs.Form.Validator');

  FormsJs.Form.Validator.MatchingInput = (function() {
    function MatchingInput(options) {
      this.options = options;
    }

    MatchingInput.prototype.isValid = function(value) {
      var fieldValue, matchField;
      matchField = this.options.matchField;
      fieldValue = $("[name=" + matchField + "]").val() || value;
      return fieldValue === value;
    };

    return MatchingInput;

  })();

}).call(this);
