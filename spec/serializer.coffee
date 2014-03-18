describe 'Serializer', ->

  it 'converts the value of a text element to a JSON object', ->
    setFixtures("<form action='#'><input type='text' name='textName' value='some value' /></form>")

    expect(Form.Serializer.serialize()).toEqual('{"textName":"some value"}')

  it 'converts the checked value of a radio group to a JSON object', ->
    setFixtures(
      "<form action='#'>
         <input type='radio' name='radioName' value='Radio 1' >
         <input type='radio' name='radioName' value='Radio 2' checked >
         <input type='radio' name='radioName' value='Radio 3' >
      </form>")

   expect(Form.Serializer.serialize()).toEqual('{"radioName":"Radio 2"}')

