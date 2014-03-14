(function() {
  var myForm;

  myForm = {
    name: 'textBox2',
    value: 'Default Value',
    validations: ['some validation']
  };

  describe('Bind Validations', function() {
    return it('binds the change event to a text input element for validation', function() {
      setFixtures("<input type='text' name='textBox2' />");
      bindValidations(myForm);
      return expect($("[name='textBox2']")).toHandle('change');
    });
  });

}).call(this);
