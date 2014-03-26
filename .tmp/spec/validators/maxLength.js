(function() {
  describe('Form.Validator.MaxLength', function() {
    var maxLengthValidator;
    maxLengthValidator = {};
    beforeEach(function() {
      var validator;
      validator = {
        type: 'maxLength',
        length: 14
      };
      return maxLengthValidator = new FormsJs.Form.Validator.MaxLength(validator);
    });
    it('returns true if a text field has less characters than the max length', function() {
      return expect(maxLengthValidator.isValid('Less than max')).toBeTruthy();
    });
    return it('returns false if a text field has more characters than the max length', function() {
      return expect(maxLengthValidator.isValid('More than the max')).toBeFalsy();
    });
  });

}).call(this);
