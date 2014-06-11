(function() {
  describe('FormJs.Clear', function() {
    it('clears a text input element', function() {
      var element;
      setFixtures("<input type='text' data-id='email' value='example@me.com'>");
      element = {
        type: 'text',
        elementSelector: '[data-id=email]'
      };
      FormsJs.Clear.valueOf(element);
      return expect($(element.elementSelector).val()).toEqual('');
    });
    it('clears a radio button element', function() {
      var element;
      setFixtures("<input type='radio' name='gender' value='male' checked>");
      element = {
        type: 'radio',
        elementSelector: '[name=gender]'
      };
      FormsJs.Clear.valueOf(element);
      return expect($(element.elementSelector)).not.toBeChecked();
    });
    it('clears a checkbox element', function() {
      var element;
      setFixtures("<input type='checkbox' data-id='interests' value='Java' checked>");
      element = {
        type: 'checkbox',
        elementSelector: '[data-id=interests]'
      };
      FormsJs.Clear.valueOf(element);
      return expect($(element.elementSelector)).not.toBeChecked();
    });
    return it('clears a select list', function() {
      var element;
      setFixtures("<select name='browser'><option value=''></option><option selected>Chrome</option></select>");
      element = {
        type: 'select',
        elementSelector: '[name=browser]'
      };
      FormsJs.Clear.valueOf(element);
      return expect($(element.elementSelector).val()).toEqual('');
    });
  });

}).call(this);
