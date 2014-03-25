(function() {
  describe('FormsJs.Form.Validator.Custom', function() {
    it('takes a custom regular expression and returns false when value does not match', function() {
      var customRegEx, customValidator, value;
      customRegEx = /[^0-9]+/;
      value = '12345';
      customValidator = new FormsJs.Form.Validator.Custom;
      return expect(customValidator.isValid(value, void 0, customRegEx)).toBeFalsy();
    });
    it('takes a custom regular expression and returns true when the value does match', function() {
      var customRegEx, customValidator, value;
      customRegEx = /(?:\d{3}|\(\d{3}\))([-\/\.])\d{3}\1\d{4}/;
      value = '123-456-7890';
      customValidator = new FormsJs.Form.Validator.Custom;
      return expect(customValidator.isValid(value, void 0, customRegEx)).toBeTruthy();
    });
    return it('takes a custom regular expression and returns true when the value is blank and not required', function() {
      var customRegEx, customValidator, value;
      customRegEx = /\W+/;
      value = '';
      customValidator = new FormsJs.Form.Validator.Custom;
      return expect(customValidator.isValid(value, void 0, customRegEx)).toBeTruthy();
    });
  });

}).call(this);
