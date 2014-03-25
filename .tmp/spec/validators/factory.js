(function() {
  describe('Form.Validator.Factory', function() {
    var assertNewValidator;
    assertNewValidator = function(validatorString, validatorObject) {
      var validationFactory;
      validationFactory = new FormsJs.Form.Validator.Factory;
      return expect(validationFactory.build(validatorString)).toEqual(validatorObject);
    };
    it('builds a new required validator', function() {
      var requiredValidator;
      requiredValidator = new FormsJs.Form.Validator.Required;
      return assertNewValidator('required', requiredValidator);
    });
    it('builds a new email validator', function() {
      var emailValidator;
      emailValidator = new FormsJs.Form.Validator.Email;
      return assertNewValidator('email', emailValidator);
    });
    it('builds a new max length validator', function() {
      var maxLengthValidator;
      maxLengthValidator = new FormsJs.Form.Validator.MaxLength;
      return assertNewValidator('maxLength', maxLengthValidator);
    });
    it('builds a new min length validator', function() {
      var minLengthValidator;
      minLengthValidator = new FormsJs.Form.Validator.MinLength;
      return assertNewValidator('minLength', minLengthValidator);
    });
    return it('build a new regexp validator', function() {
      var regExpValidator;
      regExpValidator = new FormsJs.Form.Validator.RegExp;
      return assertNewValidator('regExp', regExpValidator);
    });
  });

}).call(this);
