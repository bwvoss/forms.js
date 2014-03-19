(function() {
  describe('Form.Serializer', function() {
    it('converts the value of a text element to a JSON object', function() {
      setFixtures("<form action='#'> <input type='text' name='textName' value='some value' /> </form>");
      return expect(Form.Serializer.serialize()).toEqual('{"textName":"some value"}');
    });
    it('converts the checked value of a radio group to a JSON object', function() {
      setFixtures("<form action='#'> <input type='radio' name='radioName' value='Radio 1' > <input type='radio' name='radioName' value='Radio 2' checked > <input type='radio' name='radioName' value='Radio 3' > </form>");
      return expect(Form.Serializer.serialize()).toEqual('{"radioName":"Radio 2"}');
    });
    it('converts the selected value of a select list to a JSON object', function() {
      setFixtures("<form action='#'> <select name='selectName'> <option>Option 1</option> <option>Option 2</option> <option selected>Option 3</option> </select> </form>");
      return expect(Form.Serializer.serialize()).toEqual('{"selectName":"Option 3"}');
    });
    return it('converts the values of checked checkboxes to an array inside a JSON object', function() {
      setFixtures("<form action='#'> <input type='checkbox' name='checkName' value='Checkbox 1' checked> <input type='checkbox' name='checkName' value='Checkbox 2' checked> <input type='checkbox' name='checkName' value='Checkbox 3'> </form>");
      return expect(Form.Serializer.serialize()).toEqual('{"checkName":["Checkbox 1","Checkbox 2"]}');
    });
  });

}).call(this);
