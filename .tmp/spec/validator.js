(function() {
  describe('FormsJs.Validator', function() {
    var createTestValidator, testData;
    testData = [
      {
        type: 'text',
        elementSelector: '[name=lastName]',
        validations: [
          {
            type: 'minLength',
            length: 5,
            errorMessage: 'Please enter at least 5 characters'
          }
        ]
      }, {
        type: 'radio',
        elementSelector: '[name=gender]',
        validations: [
          {
            type: 'required',
            errorMessage: 'Gender is required'
          }
        ]
      }, {
        type: 'text',
        elementSelector: '[name=email]',
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
        elementSelector: '[name=phone]',
        validations: [
          {
            type: 'regExp',
            pattern: /(?:\d{3}|\(\d{3}\))([-\/\.])\d{3}\1\d{4}/,
            errorMessage: 'Please enter a valid phone number as ###-###-####'
          }
        ]
      }, {
        type: 'text',
        elementSelector: '[name=phoneType]',
        validations: [
          {
            type: 'customMatcher',
            errorMessage: 'Phone type is required when phone is entered',
            matcher: function(value) {
              var phoneValue;
              phoneValue = $('[name=phone]', '#form2').val();
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
      }, {
        type: 'checkbox',
        elementSelector: '[name=interests]'
      }, {
        type: 'select',
        elementSelector: '[name=browser]',
        value: 'Chrome',
        validations: [
          {
            type: 'required',
            errorMessage: 'Browser is required'
          }
        ]
      }, {
        type: 'password',
        elementSelector: '[name=password]',
        validations: [
          {
            type: 'minLength',
            errorMessage: 'Password must be 8 or more characters',
            length: 8
          }, {
            type: 'required',
            errorMessage: 'Password is required'
          }
        ]
      }, {
        type: 'password',
        elementSelector: '[name=passwordConfirmation]',
        validations: [
          {
            type: 'matchingInput',
            errorMessage: 'Passwords must match',
            matchField: '[name=password]'
          }, {
            type: 'required',
            errorMessage: 'Password confirmation is required'
          }
        ]
      }
    ];
    createTestValidator = function(data, scope) {
      return new FormsJs.Validator(data, scope);
    };
    it('validates an empty form as false', function() {
      var testValidator;
      testValidator = createTestValidator(testData);
      loadFixtures('emptyFormFixtures.html');
      return expect(testValidator.isValid()).toBeFalsy();
    });
    it('validates a filled form as true within a scope', function() {
      var scope, testValidator;
      scope = '#form2';
      testValidator = createTestValidator(testData, scope);
      loadFixtures('filledFormFixturesWithScope.html');
      return expect(testValidator.isValid()).toBeTruthy();
    });
    it('returns an empty object if all form elements are true', function() {
      var scope, testValidator;
      scope = '#form2';
      testValidator = createTestValidator(testData, scope);
      loadFixtures('filledFormFixturesWithScope.html');
      return expect(testValidator.errors()).toEqual({});
    });
    return it('gets a list of all the errors from a form within a scope', function() {
      var scope, testValidator;
      scope = '#form2';
      testValidator = createTestValidator(testData, scope);
      loadFixtures('errorFormFixturesWithScope.html');
      return expect(testValidator.errors()).toEqual({
        '[name=lastName]': ['Please enter at least 5 characters'],
        '[name=gender]': ['Gender is required'],
        '[name=email]': ['Please enter a valid email address'],
        '[name=phone]': ['Please enter a valid phone number as ###-###-####'],
        '[name=phoneType]': ['Phone type is required when phone is entered'],
        '[name=browser]': ['Browser is required'],
        '[name=password]': ['Password is required'],
        '[name=passwordConfirmation]': ['Password confirmation is required']
      });
    });
  });

}).call(this);
