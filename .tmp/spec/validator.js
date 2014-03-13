(function() {
  describe('Form.Validator', function() {
    it('returns false if an email is required but empty', function() {
      var data;
      setFixtures("<input type='text' name='email' value='' />");
      data = {
        name: 'email',
        validations: [
          {
            type: 'email'
          }, {
            type: 'required'
          }
        ]
      };
      return expect(Form.Validator.isValid(data)).toBeFalsy();
    });
    return it('returns false if the minimum length is not met', function() {
      var data;
      setFixtures("<input type='text' name='text' value='minimum' />");
      data = {
        name: 'text',
        validations: [
          {
            type: 'minLength',
            length: 8
          }, {
            type: 'required'
          }
        ]
      };
      return expect(Form.Validator.isValid(data)).toBeFalsy();
    });
  });

}).call(this);
