describe 'FormsJs.Form.Populator', ->

  assertValueEquals = (name, value) ->
    expect($("[name=#{name}]")).toHaveValue(value)

  assertChecked = (name, value) ->
    expect($("[name=#{name}][value=#{value}]")).toBeChecked()

  it 'populates a text element with a default value', ->
    setFixtures("<input type='text' name='textName' value='' />")
    data = { type: 'text', name: 'textName', value: 'Default Text' }

    FormsJs.Form.Populator.populate(data)

    assertValueEquals('textName', 'Default Text')

  it 'populates a radio button with a default value', ->
    setFixtures("<input type='radio' name='radioName' value='radio1' />")
    data = { type: 'radio', name: 'radioName', value: 'radio1' }

    FormsJs.Form.Populator.populate(data)

    assertChecked('radioName', 'radio1')

  it 'populates check boxes with default values', ->
    setFixtures(
      "<input type='checkbox' name='checkboxName' value='check1' />
       <input type='checkbox' name='checkboxName' value='check2' />
      ")
    data = { type: 'checkbox', name: 'checkboxName', value: ['check1', 'check2'] }

    FormsJs.Form.Populator.populate(data)

    assertChecked('checkboxName', 'check1')
    assertChecked('checkboxName', 'check2')

  it 'populates check boxes when default value is a string', ->
    setFixtures(
      "<input type='checkbox' name='checkboxName' value='check1' />
       <input type='checkbox' name='checkboxName' value='check2' />
      ")
    data = { type: 'checkbox', name: 'checkboxName', value: 'check1' }

    FormsJs.Form.Populator.populate(data)

    assertChecked('checkboxName', 'check1')

  it 'populates a select element with a default value', ->
    setFixtures("<select name='selectName' ><option>Select 1</option><option>Select 2</option></select>")
    data = { type: 'select', name: 'selectName', value: 'Select 2' }

    FormsJs.Form.Populator.populate(data)

    assertValueEquals('selectName', 'Select 2')


