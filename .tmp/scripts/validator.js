(function() {
  namespace('FormsJs');

  FormsJs.Validator = (function() {
    function Validator() {}

    Validator.isValid = function(validator, value) {
      var validationFactory;
      validationFactory = new FormsJs.Validator.Factory;
      return validationFactory.build(validator).isValid(value);
    };

    return Validator;

  })();

}).call(this);
