(function() {
  describe('FormsJs.Form.Validators.CustomMatcher', function() {
    it('returns false using a custom validation function', function() {
      var customValidator, validation;
      validation = {
        type: 'customMatcher',
        errorMessage: 'This field is more complex',
        matcher: function(value) {
          return false;
        }
      };
      customValidator = new FormsJs.Form.Validator.CustomMatcher(validation);
      return expect(customValidator.isValid('test')).toBeFalsy();
    });
    return it('returns true when using a custom validation function', function() {
      var customValidator, validation;
      validation = {
        type: 'customMatcher',
        errorMessage: 'This field is more complex',
        matcher: function(value) {
          if (value) {
            return true;
          } else {
            return false;
          }
        }
      };
      customValidator = new FormsJs.Form.Validator.CustomMatcher(validation);
      return expect(customValidator.isValid('test')).toBeTruthy();
    });
  });

}).call(this);
