(function() {
  describe('FormsJs.Form.Errors', function() {
    var testData;
    testData = [
      {
        type: 'text',
        name: 'lastName',
        validations: [
          {
            type: 'minLength',
            length: 5,
            errorMessage: 'Please enter at lease 5 characters'
          }
        ]
      }, {
        type: 'radio',
        name: 'gender',
        validations: [
          {
            type: 'required',
            errorMessage: 'Gender is required'
          }
        ]
      }, {
        type: 'text',
        name: 'email',
        validations: [
          {
            type: 'email',
            errorMessage: 'Please enter a valid email address'
          }, {
            type: 'maxLength',
            length: 15,
            errorMessage: 'Email cannot be longer than 15 characters'
          }
        ]
      }, {
        type: 'text',
        name: 'phone',
        validations: [
          {
            type: 'regExp',
            pattern: /(?:\d{3}|\(\d{3}\))([-\/\.])\d{3}\1\d{4}/,
            errorMessage: 'Please enter a valid phone number as ###-###-####'
          }
        ]
      }, {
        type: 'text',
        name: 'phoneType',
        validations: [
          {
            type: 'customMatcher',
            errorMessage: 'Phone type is required when phone is entered',
            matcher: function(value) {
              var phoneValue;
              phoneValue = $('[name=phone]').val();
              if (phoneValue === '') {
                return true;
              } else if (value !== '') {
                return true;
              } else {
                return false;
              }
            }
          }
        ]
      }
    ];
    xit('returns an array of error messages for all elements that are false');
    return it('returns an empty array if all form elements are true', function() {
      loadFixtures('filledFormFixtures.html');
      return expect(FormsJs.Form.Errors.get(testData)).toEqual([]);
    });
  });

}).call(this);
