(function() {
  describe('FormsJs.Form.Validator.RegExp', function() {
    it('takes a custom regular expression and returns false when value does not match', function() {
      var regExpValidator, validator, value;
      validator = {
        pattern: /[^0-9]+/
      };
      value = '12345';
      regExpValidator = new FormsJs.Form.Validator.RegExp(validator);
      return expect(regExpValidator.isValid(value)).toBeFalsy();
    });
    it('takes a custom regular expression and returns true when the value does match', function() {
      var regExpValidator, validator, value;
      validator = {
        pattern: /(?:\d{3}|\(\d{3}\))([-\/\.])\d{3}\1\d{4}/
      };
      value = '123-456-7890';
      regExpValidator = new FormsJs.Form.Validator.RegExp(validator);
      return expect(regExpValidator.isValid(value)).toBeTruthy();
    });
    return it('takes a custom regular expression and returns true when the value is blank and not required', function() {
      var regExpValidator, validator, value;
      validator = {
        pattern: /\W+/
      };
      value = '';
      regExpValidator = new FormsJs.Form.Validator.RegExp(validator);
      return expect(regExpValidator.isValid(value)).toBeTruthy();
    });
  });

}).call(this);
