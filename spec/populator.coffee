describe 'Populate Form', ->
  it 'populates a text form element with a default value', ->
    setFixtures("<input type='text' name='textBox1' value='' />")
    data = {
      name: 'textBox1'
      value: 'Default Text'
    }

    populate(data)
    expect($("[name='textBox1']")).toHaveValue('Default Text')
