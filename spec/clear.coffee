describe 'FormJs.Clear', ->

  it 'clears a text input element', ->
    setFixtures("<input type='text' name='email' value='example@me.com'>")
    element = { type: 'text', name: 'email' }

    FormsJs.Clear.valueOf(element)

    expect($('[name=email]').val()).toEqual('')

  it 'clears a radio button element', ->
    setFixtures("<input type='radio' name='gender' value='male' checked>")
    element = { type: 'radio', name: 'gender' }

    FormsJs.Clear.valueOf(element)

    expect($('[name=gender]')).not.toBeChecked()

  it 'clears a checkbox element', ->
    setFixtures("<input type='checkbox' name='interests' value='Java' checked>")
    element = { type: 'checkbox', name: 'interests' }

    FormsJs.Clear.valueOf(element)

    expect($('[name=interests]')).not.toBeChecked()

  it 'clears a select list', ->
    setFixtures("<select name='browser'><option value=''></option><option selected>Chrome</option></select>")
    element = { type: 'select', name: 'browser' }

    FormsJs.Clear.valueOf(element)

    expect($('[name=browser]').val()).toEqual('')
