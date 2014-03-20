(function() {
  describe('Form', function() {
    return it('clears the form', function() {
      setFixtures("<form action='#'> <input type='text' name='email' value='example@me.com'> <input type='radio' name='gender' value='male' checked> <input type='checkbox' name='interests' value='Java' checked> <select name='browser'> <option value=''></option> <option selected>Chrome</option> </select> </form>");
      FormsJs.Form.clear();
      expect($('[name=email]').val()).toEqual('');
      expect($('[name=gender]:checked').val()).toBe(void 0);
      expect($('[name=interests]:checked').val()).toBe(void 0);
      return expect($('[name=email]').val()).toEqual('');
    });
  });

}).call(this);
