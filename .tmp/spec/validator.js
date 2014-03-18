(function() {
  describe('Form.Validator', function() {
    var assertValidationEquals, createData;
    createData = function(type, name, validations) {
      var data;
      data = {};
      data.type = type;
      data.name = name;
      data.validations = validations;
      return data;
    };
    assertValidationEquals = function(data, value) {
      return expect(Form.Validator.isValid(data)).toEqual(value);
    };
    it('returns an array of error objects if an email is required but empty', function() {
      var data;
      setFixtures("<input type='text' name='email' value='' >");
      data = createData('text', 'email', [
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
      setFixtures("<input type='text' name='text' value='minimum' >");
      data = createData('text', 'text', [
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
    it('returns true if no errors exist', function() {
      var data;
      setFixtures("<input type='text' name='noErrors' value='Some Text' >");
      data = createData('text', 'noErrors', [
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
    it('returns an array of error objects if a radio button is required and left unchecked', function() {
      var data;
      setFixtures("<input type='radio' name='radioName' value='Option 1'><input type='radio' name='radioName' value='Option 2'>");
      data = createData('radio', 'radioName', [
        {
          type: 'required',
          errorMessage: 'This field is required'
        }
      ]);
      return assertValidationEquals(data, [
        {
          name: 'radioName',
          errorMessage: 'This field is required'
        }
      ]);
    });
    return it('returns an array of error objects if a select is required and unselected', function() {
      var data;
      setFixtures("<select name='selectList'><option>Option 1</option><option selected='selected'>Option 2</option></select>");
      data = createData('select', 'selectList', [
        {
          type: 'required',
          errorMessage: 'This field is required'
        }
      ]);
      return assertValidationEquals(data, [
        {
          name: 'selectList',
          errorMessage: 'This field is required'
        }
      ]);
    });
  });

}).call(this);
