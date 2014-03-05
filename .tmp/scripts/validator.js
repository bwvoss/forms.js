(function() {
  namespace('FormsJs.Form');

  FormsJs.Form.Validator = (function() {
    function Validator() {}

    Validator.isValid = function(validator, value) {
      var validationFactory;
      validationFactory = new FormsJs.Form.Validator.Factory;
      return validationFactory.build(validator).isValid(value);
    };

    return Validator;

  })();

}).call(this);
