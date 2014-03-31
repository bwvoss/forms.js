(function() {
  describe('FormsJs.Form.Validators.CustomMatcher', function() {
    var newValidator, validation;
    validation = {
      type: 'customMatcher',
      errorMessage: 'This field is more complex',
      matcher: function(value) {
        return false;
      }
    };
    newValidator = function(validation) {
      return new FormsJs.Form.Validator.CustomMatcher(validation);
    };
    it('returns false using a custom validation function', function() {
      var customValidator;
      customValidator = newValidator(validation);
      return expect(customValidator.isValid('test')).toBeFalsy();
    });
    it('returns true when using a custom validation function', function() {
      var customValidator;
      validation.matcher = function(value) {
        return true;
      };
      customValidator = newValidator(validation);
      return expect(customValidator.isValid('test')).toBeTruthy();
    });
    return it('returns true when no custom function is defined', function() {
      var customValidator;
      validation.matcher = void 0;
      customValidator = newValidator(validation);
      return expect(customValidator.isValid('test')).toBeTruthy();
    });
  });

}).call(this);
