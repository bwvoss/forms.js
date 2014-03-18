describe 'Populator', ->

  assertValueEquals = (name, value) ->
    expect($("[name=#{name}]")).toHaveValue(value)

  assertCheckedEquals = (name, value) ->
    expect($("[name=#{name}]:checked")).toHaveValue(value)

  it 'populates a text element with a default value', ->
    setFixtures("<input type='text' name='textName' value='' />")
    data = { type: 'text', name: 'textName', value: 'Default Text' }

    Form.Populator.populate(data)
    assertValueEquals('textName', 'Default Text')

  it 'populates a radio button with a default value', ->
    setFixtures("<input type='radio' name='radioName' value='radio1' />")
    data = { type: 'radio', name: 'radioName', value: 'radio1' }

    Form.Populator.populate(data)
    assertCheckedEquals('radioName', 'radio1')

  it 'populates a check box with a default value', ->
    setFixtures("<input type='checkbox' name='checkboxName' value='check1' />")
    data = { type: 'checkbox', name: 'checkboxName', value: 'check1' }

    Form.Populator.populate(data)
    assertCheckedEquals('checkboxName', 'check1')

  it 'populates a select element with a default value', ->
    setFixtures("<select name='selectName' ><option>Select 1</option><option>Select 2</option></select>")
    data = { type: 'select', name: 'selectName', value: 'Select 2' }

    Form.Populator.populate(data)
    assertValueEquals('selectName', 'Select 2')


