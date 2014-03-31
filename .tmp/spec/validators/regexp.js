(function() {
  describe('FormsJs.Form.Validator.RegExp', function() {
    var newValidator;
    newValidator = function(validation) {
      return new FormsJs.Form.Validator.RegExp(validation);
    };
    it('takes a custom regular expression and returns false when value does not match', function() {
      var regExpValidator, validation;
      validation = {
        pattern: /[^0-9]+/
      };
      regExpValidator = newValidator(validation);
      return expect(regExpValidator.isValid('12345')).toBeFalsy();
    });
    it('takes a custom regular expression and returns true when the value does match', function() {
      var regExpValidator, validation;
      validation = {
        pattern: /(?:\d{3}|\(\d{3}\))([-\/\.])\d{3}\1\d{4}/
      };
      regExpValidator = newValidator(validation);
      return expect(regExpValidator.isValid('123-456-7890')).toBeTruthy();
    });
    it('takes a custom regular expression and returns true when the value is blank and not required', function() {
      var regExpValidator, validation;
      validation = {
        pattern: /\W+/
      };
      regExpValidator = newValidator(validation);
      return expect(regExpValidator.isValid('')).toBeTruthy();
    });
    return it('returns true if a custom regular expression is not defined', function() {
      var regExpValidator, validation;
      validation = {};
      regExpValidator = newValidator(validation);
      return expect(regExpValidator.isValid('anything')).toBeTruthy();
    });
  });

}).call(this);
