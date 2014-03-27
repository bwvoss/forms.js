(function() {
  describe('FormsJs.Form.Validator', function() {
    var validatorTest;
    validatorTest = function(validator, value) {
      return FormsJs.Form.Validator.isValid(validator, value);
    };
    it('builds an email validator and returns false when value does not match email reg exp', function() {
      var validator, value;
      validator = {
        type: 'email'
      };
      value = 'example.com';
      return expect(validatorTest(validator, value)).toBeFalsy();
    });
    it('builds a required validator and returns false when value is undefined', function() {
      var validator, value;
      validator = {
        type: 'required'
      };
      value = void 0;
      return expect(validatorTest(validator, value)).toBeFalsy();
    });
    it('builds a min length validator and returns false when value is less than min', function() {
      var validator, value;
      validator = {
        type: 'minLength',
        length: 5
      };
      value = 'two';
      return expect(validatorTest(validator, value)).toBeFalsy();
    });
    it('builds a max length validator and returns false when value is more than max', function() {
      var validator, value;
      validator = {
        type: 'maxLength',
        length: 5
      };
      value = 'eleven';
      return expect(validatorTest(validator, value)).toBeFalsy();
    });
    it('builds a regexp validator and returns false when value does not match', function() {
      var validator, value;
      validator = {
        type: 'regExp',
        pattern: /[a-zA-z]+/
      };
      value = 12345;
      return expect(validatorTest(validator, value)).toBeFalsy();
    });
    it('builds a custom validator and returns false when value does not pass function', function() {
      var myFunction, validator, value;
      myFunction = function(value) {
        return false;
      };
      validator = {
        type: 'customMatcher',
        matcher: myFunction
      };
      value = 12345;
      return expect(validatorTest(validator, value)).toBeFalsy();
    });
    it('builds a matching input validator and returns false when value does match another field', function() {
      var validator, value;
      setFixtures("<input type='text' name='password' value='P@ssword'>");
      validator = {
        type: 'matchingInput',
        matchField: 'password'
      };
      value = 12345;
      return expect(validatorTest(validator, value)).toBeFalsy();
    });
    it('builds an email validator and returns true when value does match email reg exp', function() {
      var validator, value;
      validator = {
        type: 'email'
      };
      value = 'me@example.com';
      return expect(validatorTest(validator, value)).toBeTruthy();
    });
    it('builds a required validator and returns true when value is something', function() {
      var validator, value;
      validator = {
        type: 'required'
      };
      value = 'something';
      return expect(validatorTest(validator, value)).toBeTruthy();
    });
    it('builds a min length validator and returns true when value is more than min', function() {
      var validator, value;
      validator = {
        type: 'minLength',
        length: 5
      };
      value = 'eleven';
      return expect(validatorTest(validator, value)).toBeTruthy();
    });
    it('builds a max length validator and returns true when value is less than max', function() {
      var validator, value;
      validator = {
        type: 'maxLength',
        length: 5
      };
      value = 'four';
      return expect(validatorTest(validator, value)).toBeTruthy();
    });
    it('builds a regexp validator and returns true when value does match', function() {
      var validator, value;
      validator = {
        type: 'regExp',
        pattern: /[a-zA-z]+/
      };
      value = 'abcde';
      return expect(validatorTest(validator, value)).toBeTruthy();
    });
    it('builds a custom validator and returns true when value passes a function', function() {
      var myFunction, validator, value;
      myFunction = function(value) {
        return true;
      };
      validator = {
        type: 'customMatcher',
        matcher: myFunction
      };
      value = 12345;
      return expect(validatorTest(validator, value)).toBeTruthy();
    });
    return it('builds a matching input validator and returns true when value matchs another field', function() {
      var validator, value;
      setFixtures("<input type='text' name='password' value='P@ssword'>");
      validator = {
        type: 'matchingInput',
        matchField: 'password'
      };
      value = 'P@ssword';
      return expect(validatorTest(validator, value)).toBeTruthy();
    });
  });

}).call(this);
