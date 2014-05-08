(function() {
  namespace('FormsJs.Validator');

  FormsJs.Validator.Factory = (function() {
    function Factory() {}

    Factory.prototype.build = function(validation) {
      switch (validation.type) {
        case 'required':
          return new FormsJs.Validator.Required(validation);
        case 'email':
          return new FormsJs.Validator.Email(validation);
        case 'maxLength':
          return new FormsJs.Validator.MaxLength(validation);
        case 'minLength':
          return new FormsJs.Validator.MinLength(validation);
        case 'regExp':
          return new FormsJs.Validator.RegExp(validation);
        case 'matchingInput':
          return new FormsJs.Validator.MatchingInput(validation);
        default:
          return new FormsJs.Validator.CustomMatcher(validation);
      }
    };

    return Factory;

  })();

}).call(this);
