(function() {
  describe('Form', function() {
    var getValues, testData;
    getValues = function(data) {
      return FormsJs.Form.Values.get(data);
    };
    testData = [
      {
        type: 'text',
        name: 'lastName',
        value: 'My Last Name',
        validations: [
          {
            type: 'minLength',
            length: 5
          }
        ]
      }, {
        type: 'radio',
        name: 'gender',
        value: 'male',
        validations: [
          {
            type: 'required'
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
            type: 'required'
          }
        ]
      }
    ];
    it('creates a new form object when given an array of data objects', function() {
      var testForm;
      testForm = new FormsJs.Form(testData);
      return expect(testForm.data[0].type).toEqual('text');
    });
    it('populates all form elements with their default values', function() {
      var testForm;
      testForm = new FormsJs.Form(testData);
      loadFixtures('emptyFormFixtures.html');
      testForm.populate();
      expect(getValues(testData[0])).toEqual('My Last Name');
      expect(getValues(testData[1])).toEqual('male');
      expect(getValues(testData[2])).toEqual(['JavaScript', 'Ruby']);
      return expect(getValues(testData[3])).toEqual('Chrome');
    });
    it('loops through all form elements and validates them', function() {
      var testForm;
      testForm = new FormsJs.Form(testData);
      loadFixtures('emptyFormFixtures.html');
      return expect(testForm.validate()).toBeFalsy();
    });
    return it('loops through all form elements and serializes them', function() {
      var testForm;
      testForm = new FormsJs.Form(testData);
      loadFixtures('filledFormFixtures.html');
      return expect(testForm.serialize()).toEqual({
        lastName: 'My Last Name',
        gender: 'male',
        interests: ['JavaScript', 'Ruby'],
        browser: 'Chrome'
      });
    });
  });

}).call(this);
