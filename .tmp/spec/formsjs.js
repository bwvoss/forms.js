(function() {
  var testForm;

  testForm = {
    type: 'text',
    attr: '[data-id=text]',
    validations: '[email, new(emailValidation)]',
    value: 'hello',
    name: 'text'
  };

  describe('FormsJS', (function(_this) {
    return function() {
      return it('instantiates a new forms object', function() {
        var myForm;
        myForm = new FormsJS(testForm);
        return expect(myForm.object.type).toEqual('text');
      });
    };
  })(this));

}).call(this);
