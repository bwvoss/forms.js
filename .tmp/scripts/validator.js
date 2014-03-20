(function() {
  namespace('FormsJs.Form');

  FormsJs.Form.Validator = (function() {
    var allValidations;

    function Validator() {}

    allValidations = function(validations, value, name) {
      var validationFactory;
      validationFactory = new Form.Validator.Factory;
      return _.all(validations, (function(_this) {
        return function(validation) {
          return (validationFactory.build(validation.type)).isValid(value, validation.length);
        };
      })(this));
    };

    Validator.isValid = function(data) {
      var validations, value;
      validations = data.validations;
      value = FormsJs.Form.Values.get(data);
      return allValidations(validations, value, data.name);
    };

    return Validator;

  })();

}).call(this);
