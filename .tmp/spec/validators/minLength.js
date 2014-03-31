(function() {
  describe('Form.Validator.MinLength', function() {
    var newValidator, validation;
    validation = {
      type: 'minLength',
      length: 14
    };
    newValidator = function(validation) {
      return new FormsJs.Form.Validator.MinLength(validation);
    };
    it('should return true when the value is more than the minimum length', function() {
      var minLengthValidator;
      minLengthValidator = newValidator(validation);
      return expect(minLengthValidator.isValid('More than the min')).toBeTruthy();
    });
    it('should return false when the value is less than the minimum length', function() {
      var minLengthValidator;
      minLengthValidator = newValidator(validation);
      return expect(minLengthValidator.isValid('Less than min')).toBeFalsy();
    });
    it('should return true when the value is blank and not required', function() {
      var minLengthValidator;
      minLengthValidator = newValidator(validation);
      return expect(minLengthValidator.isValid('')).toBeTruthy();
    });
    return it('should return true when the length is undefined', function() {
      var minLengthValidator;
      validation.length = void 0;
      minLengthValidator = newValidator(validation);
      return expect(minLengthValidator.isValid('anything')).toBeTruthy();
    });
  });

}).call(this);
