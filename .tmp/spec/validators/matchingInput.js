(function() {
  describe('FormsJs.Validator.MatchingInput', function() {
    var newValidator, validation;
    validation = {
      type: 'matchingInput',
      matchField: '[name=password]',
      errorMessage: 'Must match password'
    };
    newValidator = function(validation) {
      return new FormsJs.Validator.MatchingInput(validation);
    };
    it('returns true when two fields have the same input', function() {
      var matchingInputValidator, scope, value;
      scope = '#jasmine-fixtures';
      value = 'P@ssword';
      setFixtures("<input type='text' name='password' value='P@ssword' ><input type='text' name='passwordConfirm' value='" + value + "'>");
      matchingInputValidator = newValidator(validation);
      return expect(matchingInputValidator.isValid(value, scope)).toBeTruthy();
    });
    it('returns false when two fields have different input', function() {
      var matchingInputValidator, scope, value;
      scope = '#jasmine-fixtures';
      value = 'other';
      setFixtures("<input type='text' name='password' value='P@ssword' ><input type='text' name='passwordConfirm' value='" + value + ">");
      matchingInputValidator = newValidator(validation);
      return expect(matchingInputValidator.isValid(value, scope)).toBeFalsy();
    });
    return it('returns true if no additional field is defined', function() {
      var matchingInputValidator, scope, value;
      scope = '#jasmine-fixtures';
      value = 'P@ssword';
      setFixtures("<input type='text' name='password' value='P@ssword' ><input type='text' name='passwordConfirm' value='" + value + "'>");
      validation.matchField = void 0;
      matchingInputValidator = newValidator(validation);
      return expect(matchingInputValidator.isValid(value, scope)).toBeTruthy();
    });
  });

}).call(this);
