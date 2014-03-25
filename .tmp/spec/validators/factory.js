(function() {
  describe('Form.Validator.Factory', function() {
    var assertNewValidator;
    assertNewValidator = function(validator, validatorObject) {
      var validationFactory;
      validationFactory = new FormsJs.Form.Validator.Factory;
      return expect(validationFactory.build(validator)).toEqual(validatorObject);
    };
    it('builds a new required validator', function() {
      var requiredValidator, validator;
      validator = {
        type: 'required'
      };
      requiredValidator = new FormsJs.Form.Validator.Required(validator);
      return assertNewValidator(validator, requiredValidator);
    });
    it('builds a new email validator', function() {
      var emailValidator, validator;
      validator = {
        type: 'email'
      };
      emailValidator = new FormsJs.Form.Validator.Email(validator);
      return assertNewValidator(validator, emailValidator);
    });
    it('builds a new max length validator', function() {
      var maxLengthValidator, validator;
      validator = {
        type: 'maxLength'
      };
      maxLengthValidator = new FormsJs.Form.Validator.MaxLength(validator);
      return assertNewValidator(validator, maxLengthValidator);
    });
    it('builds a new min length validator', function() {
      var minLengthValidator, validator;
      validator = {
        type: 'minLength'
      };
      minLengthValidator = new FormsJs.Form.Validator.MinLength(validator);
      return assertNewValidator(validator, minLengthValidator);
    });
    return it('build a new regexp validator', function() {
      var regExpValidator, validator;
      validator = {
        type: 'regExp'
      };
      regExpValidator = new FormsJs.Form.Validator.RegExp(validator);
      return assertNewValidator(validator, regExpValidator);
    });
  });

}).call(this);
