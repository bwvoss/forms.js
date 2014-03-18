(function() {
  describe('Serializer', function() {
    return it('converts the value of a text element to a JSON object', function() {
      setFixtures("<form action='#'><input type='text' name='textName' value='some value' /></form>");
      return expect(Form.Serializer.serialize()).toEqual('{"textName":"some value"}');
    });
  });

}).call(this);
