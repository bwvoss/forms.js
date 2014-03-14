(function() {
  describe('Form.Validator', function() {
    var assertValidationEquals, createData, createFixtures;
    createFixtures = function(name, value) {
      return setFixtures("<input type='text' name='" + name + "' value='" + value + "' />");
    };
    createData = function(name, validations) {
      var data;
      data = {};
      data.name = name;
      data.validations = validations;
      return data;
    };
    assertValidationEquals = function(data, value) {
      return expect(Form.Validator.isValid(data)).toEqual(value);
    };
    it('returns an array of error objects if an email is required but empty', function() {
      var data;
      createFixtures('email', '');
      data = createData('email', [
        {
          type: 'email',
          errorMessage: 'Please enter a valid email address'
        }, {
          type: 'required',
          errorMessage: 'Email is required'
        }
      ]);
      return assertValidationEquals(data, [
        {
          name: 'email',
          errorMessage: 'Email is required'
        }
      ]);
    });
    it('returns an array of error objects if the minimum length is not met', function() {
      var data;
      createFixtures('text', 'minimum');
      data = createData('text', [
        {
          type: 'minLength',
          length: 8,
          errorMessage: 'Minimum length is 8 characters'
        }, {
          type: 'required',
          errorMessage: 'This field is required'
        }
      ]);
      return assertValidationEquals(data, [
        {
          name: 'text',
          errorMessage: 'Minimum length is 8 characters'
        }
      ]);
    });
    return it('returns true if no errors exist', function() {
      var data;
      createFixtures('noErrors', 'Some Text');
      data = createData('noErrors', [
        {
          type: 'maxLength',
          length: 10,
          errorMessage: 'Maximum length is 10 characters'
        }, {
          type: 'required',
          errorMessage: 'This field is required'
        }
      ]);
      return assertValidationEquals(data, true);
    });
  });

}).call(this);
