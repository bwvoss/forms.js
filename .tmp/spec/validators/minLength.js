(function() {
  describe('Form.Validator.MinLength', function() {
    var minLengthValidator;
    minLengthValidator = {};
    beforeEach(function() {
      var validator;
      validator = {
        type: 'minLength',
        length: 14
      };
      return minLengthValidator = new FormsJs.Form.Validator.MinLength(validator);
    });
    it('should return true when the value is more than the minimum length', function() {
      return expect(minLengthValidator.isValid('More than the min')).toBeTruthy();
    });
    it('should return false when the value is less than the minimum length', function() {
      return expect(minLengthValidator.isValid('Less than min')).toBeFalsy();
    });
    return it('should return true when the value is blank and not required', function() {
      return expect(minLengthValidator.isValid('')).toBeTruthy();
    });
  });

}).call(this);
