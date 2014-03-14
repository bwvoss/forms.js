(function() {
  namespace('Form.Validator');

  Form.Validator.Factory = (function() {
    function Factory() {}

    Factory.prototype.build = function(validation) {
      switch (validation) {
        case 'required':
          return new Form.Validator.Required;
        case 'email':
          return new Form.Validator.Email;
        case 'maxLength':
          return new Form.Validator.MaxLength;
        case 'minLength':
          return new Form.Validator.MinLength;
      }
    };

    return Factory;

  })();

}).call(this);
