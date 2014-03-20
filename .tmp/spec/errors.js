(function() {
  describe('FormsJs.Form.Errors', function() {
    return it('populates a span element with an error message', function() {
      var data;
      setFixtures("<span name='textError'></span>");
      data = {
        name: 'textError',
        errorMessage: 'This field is required'
      };
      FormsJs.Form.Errors.apply(data);
      return expect($('span[name=textError]').text()).toEqual('This field is required');
    });
  });

}).call(this);
