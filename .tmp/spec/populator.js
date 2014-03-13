(function() {
  describe('Populator', function() {
    return it('populates a text element with a default value', function() {
      var data;
      setFixtures("<input type='text' name='textBox1' value='' />");
      data = {
        name: 'textBox1',
        value: 'Default Text'
      };
      Form.Populator.populate(data);
      return expect($("[name='textBox1']")).toHaveValue('Default Text');
    });
  });

}).call(this);
