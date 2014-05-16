(function() {
  namespace('FormsJs');

  FormsJs.Validator = (function() {
    function Validator() {}

    Validator.isValid = function(validator, value, scope) {
      var validationFactory;
      validationFactory = new FormsJs.Validator.Factory;
      return validationFactory.build(validator).isValid(value, scope);
    };

    return Validator;

  })();

}).call(this);
