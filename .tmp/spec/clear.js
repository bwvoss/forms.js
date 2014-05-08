(function() {
  describe('FormJs.Clear', function() {
    it('clears a text input element', function() {
      var element;
      setFixtures("<input type='text' name='email' value='example@me.com'>");
      element = {
        type: 'text',
        name: 'email'
      };
      FormsJs.Clear.valueOf(element);
      return expect($('[name=email]').val()).toEqual('');
    });
    it('clears a radio button element', function() {
      var element;
      setFixtures("<input type='radio' name='gender' value='male' checked>");
      element = {
        type: 'radio',
        name: 'gender'
      };
      FormsJs.Clear.valueOf(element);
      return expect($('[name=gender]')).not.toBeChecked();
    });
    it('clears a checkbox element', function() {
      var element;
      setFixtures("<input type='checkbox' name='interests' value='Java' checked>");
      element = {
        type: 'checkbox',
        name: 'interests'
      };
      FormsJs.Clear.valueOf(element);
      return expect($('[name=interests]')).not.toBeChecked();
    });
    return it('clears a select list', function() {
      var element;
      setFixtures("<select name='browser'><option value=''></option><option selected>Chrome</option></select>");
      element = {
        type: 'select',
        name: 'browser'
      };
      FormsJs.Clear.valueOf(element);
      return expect($('[name=browser]').val()).toEqual('');
    });
  });

}).call(this);
