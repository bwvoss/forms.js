(function() {
  describe('Form.Validator.Factory', function() {
    var assertNewValidator;
    assertNewValidator = function(validatorString, validatorObject) {
      var validationFactory;
      validationFactory = new Form.Validator.Factory;
      return expect(validationFactory.build(validatorString)).toEqual(validatorObject);
    };
    it('builds a new required validator', function() {
      var requiredValidator;
      requiredValidator = new Form.Validator.Required;
      return assertNewValidator('required', requiredValidator);
    });
    it('builds a new email validator', function() {
      var emailValidator;
      emailValidator = new Form.Validator.Email;
      return assertNewValidator('email', emailValidator);
    });
    it('builds a new max length validator', function() {
      var maxLengthValidator;
      maxLengthValidator = new Form.Validator.MaxLength;
      return assertNewValidator('maxLength', maxLengthValidator);
    });
    return it('builds a new min length validator', function() {
      var minLengthValidator;
      minLengthValidator = new Form.Validator.MinLength;
      return assertNewValidator('minLength', minLengthValidator);
    });
  });

}).call(this);
