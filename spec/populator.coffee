describe 'Populator', ->

  it 'populates a text element with a default value', ->
    setFixtures("<input type='text' name='textBox1' value='' />")
    data = { name: 'textBox1', value: 'Default Text' }

    Form.Populator.populate(data)

    expect($("[name='textBox1']")).toHaveValue('Default Text')
