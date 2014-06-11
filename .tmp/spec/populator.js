(function() {
  describe('FormsJs.Populator', function() {
    var assertChecked, assertValueEquals, createPopulator, getValues, testData;
    testData = [
      {
        type: 'text',
        elementSelector: '[name=lastName]',
        value: 'My Last Name'
      }, {
        type: 'radio',
        elementSelector: '[name=gender]',
        value: 'male'
      }, {
        type: 'checkbox',
        elementSelector: '[name=interests]',
        value: ['Ruby', 'JavaScript']
      }, {
        type: 'select',
        elementSelector: '[name=browser]',
        value: 'Chrome'
      }
    ];
    createPopulator = function(data, scope) {
      return new FormsJs.Populator(data, scope);
    };
    getValues = function(data, scope) {
      return FormsJs.Values.get(data, scope);
    };
    assertValueEquals = function(elementSelector, value) {
      return expect($(elementSelector)).toHaveValue(value);
    };
    assertChecked = function(elementSelector, value) {
      return expect($("" + elementSelector + "[value=" + value + "]")).toBeChecked();
    };
    it('populates a text element with a default value', function() {
      var data;
      setFixtures("<input type='text' name='textName' value='' />");
      data = [
        {
          type: 'text',
          elementSelector: '[name=textName]',
          value: 'Default Text'
        }
      ];
      createPopulator(data).populate();
      return assertValueEquals(data[0].elementSelector, 'Default Text');
    });
    it('populates a radio button with a default value', function() {
      var data;
      setFixtures("<input type='radio' name='radioName' value='radio1' />");
      data = [
        {
          type: 'radio',
          elementSelector: '[name=radioName]',
          value: 'radio1'
        }
      ];
      createPopulator(data).populate();
      return assertChecked(data[0].elementSelector, 'radio1');
    });
    it('populates check boxes with default values', function() {
      var data;
      setFixtures("<input type='checkbox' name='checkboxName' value='check1' /> <input type='checkbox' name='checkboxName' value='check2' />");
      data = [
        {
          type: 'checkbox',
          elementSelector: '[name=checkboxName]',
          value: ['check1', 'check2']
        }
      ];
      createPopulator(data).populate();
      assertChecked(data[0].elementSelector, 'check1');
      return assertChecked(data[0].elementSelector, 'check2');
    });
    it('populates check boxes when default value is a string', function() {
      var data;
      setFixtures("<input type='checkbox' name='checkboxName' value='check1' /> <input type='checkbox' name='checkboxName' value='check2' />");
      data = [
        {
          type: 'checkbox',
          elementSelector: '[name=checkboxName]',
          value: 'check1'
        }
      ];
      createPopulator(data).populate();
      return assertChecked(data[0].elementSelector, 'check1');
    });
    it('populates a select element with a default value', function() {
      var data;
      setFixtures("<select name='selectName' ><option>Select 1</option><option>Select 2</option></select>");
      data = [
        {
          type: 'select',
          elementSelector: '[name=selectName]',
          value: 'Select 2'
        }
      ];
      createPopulator(data).populate();
      return assertValueEquals(data[0].elementSelector, 'Select 2');
    });
    it('populates all form elements with their default values', function() {
      var populator;
      populator = createPopulator(testData);
      loadFixtures('emptyFormFixtures.html');
      populator.populate();
      expect(getValues(testData[0])).toEqual('My Last Name');
      expect(getValues(testData[1])).toEqual('male');
      expect(getValues(testData[2])).toEqual(['JavaScript', 'Ruby']);
      return expect(getValues(testData[3])).toEqual('Chrome');
    });
    return it('populates all form elements with their default values within a given scope', function() {
      var inScope, outScope, populator;
      inScope = '#form1';
      outScope = '#form2';
      populator = createPopulator(testData, inScope);
      loadFixtures('emptyFormFixturesWithScope.html');
      populator.populate();
      expect(getValues(testData[0], inScope)).toEqual('My Last Name');
      expect(getValues(testData[1], inScope)).toEqual('male');
      expect(getValues(testData[2], inScope)).toEqual(['JavaScript', 'Ruby']);
      expect(getValues(testData[3], inScope)).toEqual('Chrome');
      expect(getValues(testData[0], outScope)).toEqual('');
      expect(getValues(testData[1], outScope)).toEqual('');
      expect(getValues(testData[2], outScope)).toEqual([]);
      return expect(getValues(testData[3], outScope)).toEqual('');
    });
  });

}).call(this);
