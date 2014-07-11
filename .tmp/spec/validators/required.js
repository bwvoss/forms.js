(function() {
  describe('FormsJs.Validator.Required', function() {
    var requiredValidator;
    requiredValidator = {};
    beforeEach(function() {
      return requiredValidator = new FormsJs.Validator.Required;
    });
    it('returns false when a text field or select list is required and value is blank', function() {
      return expect(requiredValidator.isValid('')).toBeFalsy();
    });
    it('returns false when a radio button is required and the value is undefined', function() {
      return expect(requiredValidator.isValid(void 0)).toBeFalsy();
    });
    it('returns false when a checkbox is required and the value is an empty array', function() {
      return expect(requiredValidator.isValid([])).toBeFalsy();
    });
    it('returns false when a text field only has whitespace characters', function() {
      return expect(requiredValidator.isValid('  ')).toBeFalsy();
    });
    it('returns true when a text field is required and value is not blank', function() {
      return expect(requiredValidator.isValid('some value')).toBeTruthy();
    });
    return it('returns true when a checkbox is required and the value is a filled array', function() {
      return expect(requiredValidator.isValid(['something'])).toBeTruthy();
    });
  });

}).call(this);
