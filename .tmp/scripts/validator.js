(function() {
  namespace('Form');

  Form.Validator = (function() {
    function Validator() {}

    Validator.isValid = function(data) {
      var validationFactory, validations, value;
      validations = data.validations;
      value = $("[name=" + data.name + "]").val();
      validationFactory = new Form.Validator.Factory;
      return _.all(validations, (function(_this) {
        return function(validation) {
          return (validationFactory.build(validation.type)).isValid(value, validation.length);
        };
      })(this));
    };

    return Validator;

  })();

}).call(this);
