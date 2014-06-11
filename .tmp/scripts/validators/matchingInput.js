(function() {
  namespace('FormsJs.Validator');

  FormsJs.Validator.MatchingInput = (function() {
    function MatchingInput(options) {
      this.options = options;
    }

    MatchingInput.prototype.isValid = function(value, scope) {
      var fieldValue, matchField;
      matchField = {
        elementSelector: this.options.matchField
      };
      fieldValue = FormsJs.Scope.getValue(matchField, scope) || value;
      return fieldValue === value;
    };

    return MatchingInput;

  })();

}).call(this);
