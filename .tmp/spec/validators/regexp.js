(function() {
  describe('FormsJs.Form.Validator.RegExp', function() {
    it('takes a custom regular expression and returns false when value does not match', function() {
      var regExp, regExpValidator, value;
      regExp = /[^0-9]+/;
      value = '12345';
      regExpValidator = new FormsJs.Form.Validator.RegExp;
      return expect(regExpValidator.isValid(value, void 0, regExp)).toBeFalsy();
    });
    it('takes a custom regular expression and returns true when the value does match', function() {
      var regExp, regExpValidator, value;
      regExp = /(?:\d{3}|\(\d{3}\))([-\/\.])\d{3}\1\d{4}/;
      value = '123-456-7890';
      regExpValidator = new FormsJs.Form.Validator.RegExp;
      return expect(regExpValidator.isValid(value, void 0, regExp)).toBeTruthy();
    });
    return it('takes a custom regular expression and returns true when the value is blank and not required', function() {
      var regExp, regExpValidator, value;
      regExp = /\W+/;
      value = '';
      regExpValidator = new FormsJs.Form.Validator.RegExp;
      return expect(regExpValidator.isValid(value, void 0, regExp)).toBeTruthy();
    });
  });

}).call(this);
