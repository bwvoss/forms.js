(function() {
  describe('Form', function() {
    var createTestForm, getValues, testData;
    getValues = function(data, scope) {
      return FormsJs.Values.get(data, scope);
    };
    testData = [
      {
        type: 'text',
        name: 'lastName',
        value: 'My Last Name',
        validations: [
          {
            type: 'minLength',
            length: 5,
            errorMessage: 'Please enter at least 5 characters'
          }
        ]
      }, {
        type: 'radio',
        name: 'gender',
        value: 'male',
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
        name: 'interests',
        value: ['Ruby', 'JavaScript']
      }, {
        type: 'select',
        name: 'browser',
        value: 'Chrome',
        validations: [
          {
            type: 'required',
            errorMessage: 'Browser is required'
          }
        ]
      }, {
        type: 'password',
        name: 'password',
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
        name: 'passwordConfirmation',
        validations: [
          {
            type: 'matchingInput',
            errorMessage: 'Passwords must match',
            matchField: 'password'
          }, {
            type: 'required',
            errorMessage: 'Password confirmation is required'
          }
        ]
      }
    ];
    createTestForm = function(data, scope) {
      return new FormsJs.Form(data, scope);
    };
    it('creates a new form object when given an array of data objects', function() {
      var testForm;
      testForm = createTestForm(testData);
      return expect(testForm.data[0].type).toEqual('text');
    });
    it('creates a new form object with a default scope of the document', function() {
      var testForm;
      testForm = createTestForm(testData);
      return expect(testForm.scope).toEqual($(document));
    });
    it('creates a new form object with a scope as a jQuery selector string', function() {
      var scope, testForm;
      scope = '#form1';
      testForm = createTestForm(testData, scope);
      return expect(testForm.scope).toEqual('#form1');
    });
    it('populates all form elements with their default values', function() {
      var testForm;
      testForm = createTestForm(testData);
      loadFixtures('emptyFormFixtures.html');
      testForm.populate();
      expect(getValues(testData[0])).toEqual('My Last Name');
      expect(getValues(testData[1])).toEqual('male');
      expect(getValues(testData[5])).toEqual(['JavaScript', 'Ruby']);
      return expect(getValues(testData[6])).toEqual('Chrome');
    });
    it('populates all form elements with their default values within a given scope', function() {
      var inScope, outScope, testForm;
      inScope = '#form1';
      outScope = '#form2';
      testForm = createTestForm(testData, inScope);
      loadFixtures('emptyFormFixturesWithScope.html');
      testForm.populate();
      expect(getValues(testData[0], inScope)).toEqual('My Last Name');
      expect(getValues(testData[1], inScope)).toEqual('male');
      expect(getValues(testData[5], inScope)).toEqual(['JavaScript', 'Ruby']);
      expect(getValues(testData[6], inScope)).toEqual('Chrome');
      expect(getValues(testData[0], outScope)).toEqual('');
      expect(getValues(testData[1], outScope)).toEqual('');
      expect(getValues(testData[5], outScope)).toEqual([]);
      return expect(getValues(testData[6], outScope)).toEqual('');
    });
    it('validates an empty form as false', function() {
      var testForm;
      testForm = createTestForm(testData);
      loadFixtures('emptyFormFixtures.html');
      return expect(testForm.isValid()).toBeFalsy();
    });
    it('validates a filled form as true within a scope', function() {
      var scope, testForm;
      scope = '#form2';
      testForm = createTestForm(testData, scope);
      loadFixtures('filledFormFixturesWithScope.html');
      return expect(testForm.isValid()).toBeTruthy();
    });
    it('gets a list of all the errors from a form within a scope', function() {
      var scope, testForm;
      scope = '#form2';
      testForm = createTestForm(testData, scope);
      loadFixtures('errorFormFixturesWithScope.html');
      return expect(testForm.errors()).toEqual({
        lastName: ['Please enter at least 5 characters'],
        gender: ['Gender is required'],
        email: ['Please enter a valid email address'],
        phone: ['Please enter a valid phone number as ###-###-####'],
        phoneType: ['Phone type is required when phone is entered'],
        browser: ['Browser is required'],
        password: ['Password is required'],
        passwordConfirmation: ['Password confirmation is required']
      });
    });
    it('serializes a filled form within a given scope', function() {
      var scope, testForm;
      scope = '#form2';
      testForm = createTestForm(testData, scope);
      loadFixtures('filledFormFixturesWithScope.html');
      return expect(testForm.serialize()).toEqual({
        lastName: 'My Last Name',
        gender: 'male',
        email: 'me@example.com',
        phone: '555-555-5555',
        phoneType: 'Cell',
        interests: ['JavaScript', 'Ruby'],
        browser: 'Chrome',
        password: 'P@ssword',
        passwordConfirmation: 'P@ssword'
      });
    });
    return it('clears the form within a scope', function() {
      var scope, testForm;
      scope = '#form2';
      testForm = createTestForm(testData, scope);
      loadFixtures('filledFormFixturesWithScope.html');
      testForm.clear();
      return expect($('[name=lastName]').val()).toEqual('');
    });
  });

}).call(this);
