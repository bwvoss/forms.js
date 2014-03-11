(function() {
  describe('Validate', function() {
    it('returns false when a field is required and value is blank', function() {
      var data;
      setFixtures("<input type='text' name='textBox' value='' />");
      data = {
        name: 'textBox',
        validations: ['required']
      };
      return expect(isValid(data)).toBe(false);
    });
    it('returns true when a field is required and value is not blank', function() {
      var data;
      setFixtures("<input type='text' name='textBox' value='Some Value' />");
      data = {
        name: 'textBox',
        validations: ['required']
      };
      return expect(isValid(data)).toBe(true);
    });
    it('returns false when an email is expected but does not match', function() {
      var data;
      setFixtures("<input type='text' name='email' value='example.com' />");
      data = {
        name: 'email',
        validations: ['email']
      };
      return expect(isValid(data)).toBe(false);
    });
    return it('returns true when an email is expected and matches', function() {
      var data;
      setFixtures("<input type='text' name='email' value='test@example.com' />");
      data = {
        name: 'email',
        validations: ['email']
      };
      return expect(isValid(data)).toBe(true);
    });
  });

}).call(this);
