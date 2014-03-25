(function() {
  namespace('FormsJs.Form.Validator');

  FormsJs.Form.Validator.Factory = (function() {
    function Factory() {}

    Factory.prototype.build = function(validation) {
      switch (validation.type) {
        case 'required':
          return new FormsJs.Form.Validator.Required(validation);
        case 'email':
          return new FormsJs.Form.Validator.Email(validation);
        case 'maxLength':
          return new FormsJs.Form.Validator.MaxLength(validation);
        case 'minLength':
          return new FormsJs.Form.Validator.MinLength(validation);
        case 'regExp':
          return new FormsJs.Form.Validator.RegExp(validation);
        default:
          return new FormsJs.Form.Validator.Custom(validation);
      }
    };

    return Factory;

  })();

}).call(this);
