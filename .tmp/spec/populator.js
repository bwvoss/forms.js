(function() {
  describe('Populate Form', function() {
    return it('populates a text form element with a default value', function() {
      var data;
      setFixtures("<input type='text' name='textBox1' value='' />");
      data = {
        name: 'textBox1',
        value: 'Default Text'
      };
      populate(data);
      return expect($("[name='textBox1']")).toHaveValue('Default Text');
    });
  });

}).call(this);
