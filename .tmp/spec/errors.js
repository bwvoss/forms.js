(function() {
  describe('FormsJs.Errors', function() {
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
    it('returns an object with the field name and an array of error messages if a field is invalid', function() {
      var value;
      value = 'example.com';
      setFixtures("<input type='text' name='email' value=" + value + ">");
      return expect(FormsJs.Errors.get(data)).toEqual({
        email: ['Please enter a valid email', 'Email should be a minimum of 15 characters']
      });
    });
    return it('returns an empty array if all form elements are true', function() {
      var value;
      value = 'fiveteen@example.com';
      setFixtures("<input type='text' name='email' value=" + value + ">");
      return expect(FormsJs.Errors.get(data)).toEqual({});
    });
  });

}).call(this);
