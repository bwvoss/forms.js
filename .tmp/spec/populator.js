(function() {
  describe('Populator', function() {
    var assertCheckedEquals, assertValueEquals;
    assertValueEquals = function(name, value) {
      return expect($("[name=" + name + "]")).toHaveValue(value);
    };
    assertCheckedEquals = function(name, value) {
      return expect($("[name=" + name + "]:checked")).toHaveValue(value);
    };
    it('populates a text element with a default value', function() {
      var data;
      setFixtures("<input type='text' name='textName' value='' />");
      data = {
        type: 'text',
        name: 'textName',
        value: 'Default Text'
      };
      Form.Populator.populate(data);
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
      Form.Populator.populate(data);
      return assertCheckedEquals('radioName', 'radio1');
    });
    it('populates a check box with a default value', function() {
      var data;
      setFixtures("<input type='checkbox' name='checkboxName' value='check1' />");
      data = {
        type: 'checkbox',
        name: 'checkboxName',
        value: 'check1'
      };
      Form.Populator.populate(data);
      return assertCheckedEquals('checkboxName', 'check1');
    });
    return it('populates a select element with a default value', function() {
      var data;
      setFixtures("<select name='selectName' ><option>Select 1</option><option>Select 2</option></select>");
      data = {
        type: 'select',
        name: 'selectName',
        value: 'Select 2'
      };
      Form.Populator.populate(data);
      return assertValueEquals('selectName', 'Select 2');
    });
  });

}).call(this);
