(function() {
  namespace('FormsJs.Form');

  FormsJs.Form.Validator = (function() {
    function Validator() {}

    Validator.allValidations = function(validations, value, name) {
      var validationFactory;
      validationFactory = new FormsJs.Form.Validator.Factory;
      return _.all(validations, (function(_this) {
        return function(validation) {
          return (validationFactory.build(validation)).isValid(value);
        };
      })(this));
    };

    Validator.isValid = function(data) {
      var value;
      value = FormsJs.Form.Values.get(data);
      return this.allValidations(data.validations, value);
    };

    return Validator;

  })();

}).call(this);
