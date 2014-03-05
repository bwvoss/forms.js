(function() {
  describe('Form.Values', function() {
    it('gets the value of a text box', function() {
      var data;
      setFixtures("<input type='text' name='email' value='me@example.com' >");
      data = {
        type: 'text',
        name: 'email'
      };
      return expect(FormsJs.Form.Values.get(data)).toEqual('me@example.com');
    });
    it('gets the value of a select list', function() {
      var data;
      setFixtures("<select name='interest'><option value=''></option><option selected>Option 1</option></select>");
      data = {
        type: 'select',
        name: 'interest'
      };
      return expect(FormsJs.Form.Values.get(data)).toEqual('Option 1');
    });
    it('gets the checked value of a radio button', function() {
      var data;
      setFixtures("<input type='radio' name='gender' value='male'><input type='radio' name='gender' value='female' checked>");
      data = {
        type: 'radio',
        name: 'gender'
      };
      return expect(FormsJs.Form.Values.get(data)).toEqual('female');
    });
    it('gets an array of the checked values of checkboxes', function() {
      var data;
      setFixtures("<input type='checkbox' name='options' value='Option 1'> <input type='checkbox' name='options' value='Option 2' checked> <input type='checkbox' name='options' value='Option 3' checked>");
      data = {
        type: 'checkbox',
        name: 'options'
      };
      return expect(FormsJs.Form.Values.get(data)).toEqual(['Option 2', 'Option 3']);
    });
    return it('should return an empty string if no value exists or none are checked', function() {
      var data;
      setFixtures("<input type='radio' name='gender' value='male'><input type='radio' name='gender' value='female'>");
      data = {
        type: 'radio',
        name: 'gender'
      };
      return expect(FormsJs.Form.Values.get(data)).toEqual('');
    });
  });

}).call(this);
