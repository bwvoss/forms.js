describe 'Serializer', ->
  it 'converts the value of form elements to a string', ->
    setFixtures("<form action='#'><input type='text' name='textBox' value='some value' /></form>")
    data = {
      name: 'textBox'
    }

    expect(serialize(data)).toEqual('textBox=some+value')

