(function() {
  describe('Form.Validator.MinLength', function() {
    var minLengthValidator;
    minLengthValidator = {};
    beforeEach(function() {
      return minLengthValidator = new Form.Validator.MinLength;
    });
    it('should return true when the value is more than the minimum length', function() {
      return expect(minLengthValidator.isValid('More than min', 13)).toBeTruthy();
    });
    it('should return false when the value is less than the minimum length', function() {
      return expect(minLengthValidator.isValid('Less than min', 14)).toBeFalsy();
    });
    return it('should return true when the value is blank and not required', function() {
      return expect(minLengthValidator.isValid('', 5)).toBeTruthy();
    });
  });

}).call(this);
