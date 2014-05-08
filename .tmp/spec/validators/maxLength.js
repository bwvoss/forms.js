(function() {
  describe('FormsJs.Validator.MaxLength', function() {
    var newValidator, validation;
    validation = {
      type: 'maxLength',
      length: 14
    };
    newValidator = function(validation) {
      return new FormsJs.Validator.MaxLength(validation);
    };
    it('returns true if a text field has less characters than the max length', function() {
      var maxLengthValidator;
      maxLengthValidator = newValidator(validation);
      return expect(maxLengthValidator.isValid('Less than max')).toBeTruthy();
    });
    it('returns false if a text field has more characters than the max length', function() {
      var maxLengthValidator;
      maxLengthValidator = newValidator(validation);
      return expect(maxLengthValidator.isValid('More than the max')).toBeFalsy();
    });
    return it('returns true if a length is undefined', function() {
      var maxLengthValidator;
      validation.length = void 0;
      maxLengthValidator = newValidator(validation);
      return expect(maxLengthValidator.isValid('More than the max')).toBeTruthy();
    });
  });

}).call(this);
