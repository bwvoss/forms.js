(function() {
  namespace('FormsJs.Form.Validator');

  FormsJs.Form.Validator.Factory = (function() {
    function Factory() {}

    Factory.prototype.build = function(validation) {
      switch (validation) {
        case 'required':
          return new FormsJs.Form.Validator.Required;
        case 'email':
          return new FormsJs.Form.Validator.Email;
        case 'maxLength':
          return new FormsJs.Form.Validator.MaxLength;
        case 'minLength':
          return new FormsJs.Form.Validator.MinLength;
        case 'regExp':
          return new FormsJs.Form.Validator.RegExp;
        default:
          return new FormsJs.Form.Validator.Custom;
      }
    };

    return Factory;

  })();

}).call(this);
