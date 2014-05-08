(function() {
  describe('FormsJs.Validator.MatchingInput', function() {
    var newValidator, validation;
    validation = {
      type: 'matchingInput',
      matchField: 'password',
      errorMessage: 'Must match password'
    };
    newValidator = function(validation) {
      return new FormsJs.Validator.MatchingInput(validation);
    };
    it('returns true when two fields have the same input', function() {
      var matchingInputValidator;
      setFixtures("<input type='text' name='password' value='P@ssword' ><input type='text' name='passwordConfirm' value='P@ssword'>");
      matchingInputValidator = newValidator(validation);
      return expect(matchingInputValidator.isValid('P@ssword')).toBeTruthy();
    });
    it('returns false when two fields have different input', function() {
      var matchingInputValidator;
      setFixtures("<input type='text' name='password' value='P@ssword' ><input type='text' name='passwordConfirm' value='other'>");
      matchingInputValidator = newValidator(validation);
      return expect(matchingInputValidator.isValid('other')).toBeFalsy();
    });
    return it('returns true if no additional field is defined', function() {
      var matchingInputValidator;
      setFixtures("<input type='text' name='password' value='P@ssword' ><input type='text' name='passwordConfirm' value='P@ssword'>");
      validation.matchField = void 0;
      matchingInputValidator = newValidator(validation);
      return expect(matchingInputValidator.isValid('P@ssword')).toBeTruthy();
    });
  });

}).call(this);
