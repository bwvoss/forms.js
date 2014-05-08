(function() {
  describe('FormsJs.Validator.Factory', function() {
    var assertNewValidator;
    assertNewValidator = function(validator, validatorObject) {
      var validationFactory;
      validationFactory = new FormsJs.Validator.Factory;
      return expect(validationFactory.build(validator)).toEqual(validatorObject);
    };
    it('builds a new required validator', function() {
      var requiredValidator, validator;
      validator = {
        type: 'required'
      };
      requiredValidator = new FormsJs.Validator.Required(validator);
      return assertNewValidator(validator, requiredValidator);
    });
    it('builds a new email validator', function() {
      var emailValidator, validator;
      validator = {
        type: 'email'
      };
      emailValidator = new FormsJs.Validator.Email(validator);
      return assertNewValidator(validator, emailValidator);
    });
    it('builds a new max length validator', function() {
      var maxLengthValidator, validator;
      validator = {
        type: 'maxLength'
      };
      maxLengthValidator = new FormsJs.Validator.MaxLength(validator);
      return assertNewValidator(validator, maxLengthValidator);
    });
    it('builds a new min length validator', function() {
      var minLengthValidator, validator;
      validator = {
        type: 'minLength'
      };
      minLengthValidator = new FormsJs.Validator.MinLength(validator);
      return assertNewValidator(validator, minLengthValidator);
    });
    it('builds a new regexp validator', function() {
      var regExpValidator, validator;
      validator = {
        type: 'regExp'
      };
      regExpValidator = new FormsJs.Validator.RegExp(validator);
      return assertNewValidator(validator, regExpValidator);
    });
    it('builds a new custom matcher validator', function() {
      var customValidator, validator;
      validator = {
        type: 'customMatcher'
      };
      customValidator = new FormsJs.Validator.CustomMatcher(validator);
      return assertNewValidator(validator, customValidator);
    });
    return it('builds a new matching input validator', function() {
      var customValidator, validator;
      validator = {
        type: 'matchingInput'
      };
      customValidator = new FormsJs.Validator.MatchingInput(validator);
      return assertNewValidator(validator, customValidator);
    });
  });

}).call(this);
