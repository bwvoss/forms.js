(function() {
  describe('Serializer', function() {
    it('converts the value of a text element to a JSON object', function() {
      setFixtures("<form action='#'><input type='text' name='textName' value='some value' /></form>");
      return expect(Form.Serializer.serialize()).toEqual('{"textName":"some value"}');
    });
    return it('converts the checked value of a radio group to a JSON object', function() {
      setFixtures("<form action='#'> <input type='radio' name='radioName' value='Radio 1' > <input type='radio' name='radioName' value='Radio 2' checked > <input type='radio' name='radioName' value='Radio 3' > </form>");
      return expect(Form.Serializer.serialize()).toEqual('{"radioName":"Radio 2"}');
    });
  });

}).call(this);
