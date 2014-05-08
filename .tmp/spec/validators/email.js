(function() {
  describe('FormsJs.Validator.Email', function() {
    var newValidator, validation;
    validation = {
      type: 'email',
      errorMessage: 'Please enter a valid email address'
    };
    newValidator = function(validation) {
      return new FormsJs.Validator.Email(validation);
    };
    it('returns false when an email is expected but does not match', function() {
      var emailValidator;
      emailValidator = newValidator(validation);
      return expect(emailValidator.isValid('example.com')).toBeFalsy();
    });
    it('returns true when an email is expected and matches', function() {
      var emailValidator;
      emailValidator = newValidator(validation);
      return expect(emailValidator.isValid('me@example.com')).toBeTruthy();
    });
    return it('returns true when an email is blank and not required', function() {
      var emailValidator;
      emailValidator = newValidator(validation);
      return expect(emailValidator.isValid('')).toBeTruthy();
    });
  });

}).call(this);
