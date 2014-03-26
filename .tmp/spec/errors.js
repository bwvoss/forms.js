(function() {
  describe('FormsJs.Form.Errors', function() {
    var data;
    data = {
      type: 'text',
      name: 'email',
      validations: [
        {
          type: 'email',
          errorMessage: 'Please enter a valid email'
        }, {
          type: 'minLength',
          length: 15,
          errorMessage: 'Email should be a minimum of 15 characters'
        }
      ]
    };
    it('returns an array with the error message if a field is invalid', function() {
      setFixtures("<input type='text' name='email' value='example.com'>");
      return expect(FormsJs.Form.Errors.get(data)).toEqual(['Please enter a valid email', 'Email should be a minimum of 15 characters']);
    });
    return it('returns an empty array if all form elements are true', function() {
      setFixtures("<input type='text' name='email' value='fiveteen@example.com'>");
      return expect(FormsJs.Form.Errors.get(data)).toEqual([]);
    });
  });

}).call(this);
