describe 'Serializer', ->

  it 'converts the value of a text element to a JSON object', ->
    setFixtures("<form action='#'><input type='text' name='textName' value='some value' /></form>")

    expect(Form.Serializer.serialize()).toEqual('{"textName":"some value"}')

