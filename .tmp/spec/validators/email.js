(function() {
  describe('FormsJs.Form.Validator.Email', function() {
    var emailValidator;
    emailValidator = {};
    beforeEach(function() {
      return emailValidator = new FormsJs.Form.Validator.Email();
    });
    it('returns false when an email is expected but does not match', function() {
      return expect(emailValidator.isValid('example.com')).toBeFalsy();
    });
    it('returns true when an email is expected and matches', function() {
      return expect(emailValidator.isValid('me@example.com')).toBeTruthy();
    });
    return it('returns true when an email is blank and not required', function() {
      return expect(emailValidator.isValid('')).toBeTruthy();
    });
  });

}).call(this);
