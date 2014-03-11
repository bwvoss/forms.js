(function() {
  describe('Serializer', function() {
    return it('converts the value of form elements to a string', function() {
      var data;
      setFixtures("<form action='#'><input type='text' name='textBox' value='some value' /></form>");
      data = {
        name: 'textBox'
      };
      return expect(serialize(data)).toEqual('textBox=some+value');
    });
  });

}).call(this);
