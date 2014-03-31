(function() {
  describe('Form.Validator.Required', function() {
    var requiredValidator;
    requiredValidator = {};
    beforeEach(function() {
      return requiredValidator = new FormsJs.Form.Validator.Required;
    });
    it('returns false when a text field or select list is required and value is blank', function() {
      return expect(requiredValidator.isValid('')).toBeFalsy();
    });
    it('returns true when a text field is required and value is not blank', function() {
      return expect(requiredValidator.isValid('some value')).toBeTruthy();
    });
    return it('returns false when a radio button or checkbox is required and the value is undefined', function() {
      return expect(requiredValidator.isValid(void 0)).toBeFalsy();
    });
  });

}).call(this);
