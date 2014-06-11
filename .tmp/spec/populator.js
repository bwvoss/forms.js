(function() {
  describe('FormsJs.Populator', function() {
    var assertChecked, assertValueEquals;
    assertValueEquals = function(elementSelector, value) {
      return expect($(elementSelector)).toHaveValue(value);
    };
    assertChecked = function(elementSelector, value) {
      return expect($("" + elementSelector + "[value=" + value + "]")).toBeChecked();
    };
    it('populates a text element with a default value', function() {
      var data;
      setFixtures("<input type='text' name='textName' value='' />");
      data = {
        type: 'text',
        elementSelector: '[name=textName]',
        value: 'Default Text'
      };
      FormsJs.Populator.populate(data);
      return assertValueEquals(data.elementSelector, 'Default Text');
    });
    it('populates a radio button with a default value', function() {
      var data;
      setFixtures("<input type='radio' name='radioName' value='radio1' />");
      data = {
        type: 'radio',
        elementSelector: '[name=radioName]',
        value: 'radio1'
      };
      FormsJs.Populator.populate(data);
      return assertChecked(data.elementSelector, 'radio1');
    });
    it('populates check boxes with default values', function() {
      var data;
      setFixtures("<input type='checkbox' name='checkboxName' value='check1' /> <input type='checkbox' name='checkboxName' value='check2' />");
      data = {
        type: 'checkbox',
        elementSelector: '[name=checkboxName]',
        value: ['check1', 'check2']
      };
      FormsJs.Populator.populate(data);
      assertChecked(data.elementSelector, 'check1');
      return assertChecked(data.elementSelector, 'check2');
    });
    it('populates check boxes when default value is a string', function() {
      var data;
      setFixtures("<input type='checkbox' name='checkboxName' value='check1' /> <input type='checkbox' name='checkboxName' value='check2' />");
      data = {
        type: 'checkbox',
        elementSelector: '[name=checkboxName]',
        value: 'check1'
      };
      FormsJs.Populator.populate(data);
      return assertChecked(data.elementSelector, 'check1');
    });
    return it('populates a select element with a default value', function() {
      var data;
      setFixtures("<select name='selectName' ><option>Select 1</option><option>Select 2</option></select>");
      data = {
        type: 'select',
        elementSelector: '[name=selectName]',
        value: 'Select 2'
      };
      FormsJs.Populator.populate(data);
      return assertValueEquals(data.elementSelector, 'Select 2');
    });
  });

}).call(this);
