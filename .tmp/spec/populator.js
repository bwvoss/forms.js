(function() {
  describe('FormsJs.Populator', function() {
    var assertChecked, assertValueEquals;
    assertValueEquals = function(name, value) {
      return expect($("[name=" + name + "]")).toHaveValue(value);
    };
    assertChecked = function(name, value) {
      return expect($("[name=" + name + "][value=" + value + "]")).toBeChecked();
    };
    it('populates a text element with a default value', function() {
      var data;
      setFixtures("<input type='text' name='textName' value='' />");
      data = {
        type: 'text',
        name: 'textName',
        value: 'Default Text'
      };
      FormsJs.Populator.populate(data);
      return assertValueEquals('textName', 'Default Text');
    });
    it('populates a radio button with a default value', function() {
      var data;
      setFixtures("<input type='radio' name='radioName' value='radio1' />");
      data = {
        type: 'radio',
        name: 'radioName',
        value: 'radio1'
      };
      FormsJs.Populator.populate(data);
      return assertChecked('radioName', 'radio1');
    });
    it('populates check boxes with default values', function() {
      var data;
      setFixtures("<input type='checkbox' name='checkboxName' value='check1' /> <input type='checkbox' name='checkboxName' value='check2' />");
      data = {
        type: 'checkbox',
        name: 'checkboxName',
        value: ['check1', 'check2']
      };
      FormsJs.Populator.populate(data);
      assertChecked('checkboxName', 'check1');
      return assertChecked('checkboxName', 'check2');
    });
    it('populates check boxes when default value is a string', function() {
      var data;
      setFixtures("<input type='checkbox' name='checkboxName' value='check1' /> <input type='checkbox' name='checkboxName' value='check2' />");
      data = {
        type: 'checkbox',
        name: 'checkboxName',
        value: 'check1'
      };
      FormsJs.Populator.populate(data);
      return assertChecked('checkboxName', 'check1');
    });
    return it('populates a select element with a default value', function() {
      var data;
      setFixtures("<select name='selectName' ><option>Select 1</option><option>Select 2</option></select>");
      data = {
        type: 'select',
        name: 'selectName',
        value: 'Select 2'
      };
      FormsJs.Populator.populate(data);
      return assertValueEquals('selectName', 'Select 2');
    });
  });

}).call(this);
