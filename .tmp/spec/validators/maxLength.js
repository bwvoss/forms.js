(function() {
  describe('Form.Validator.MaxLength', function() {
    var maxLengthValidator;
    maxLengthValidator = {};
    beforeEach(function() {
      return maxLengthValidator = new Form.Validator.MaxLength;
    });
    it('returns true if a text field has less characters than the max length', function() {
      return expect(maxLengthValidator.isValid('Less than max', 13)).toBeTruthy();
    });
    return it('returns false if a text field has more characters than the max length', function() {
      return expect(maxLengthValidator.isValid('More than max', 12)).toBeFalsy();
    });
  });

}).call(this);
