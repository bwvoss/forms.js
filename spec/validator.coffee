describe 'Form.Validator', ->

  createData = (type, name, validations) ->
    data = {}
    data.type = type
    data.name = name
    data.validations = validations
    data

  assertValidationEquals = (data, value) ->
    expect(Form.Validator.isValid(data)).toEqual(value)

  it 'returns an array of error objects if an email is required but empty', ->
    setFixtures("<input type='text' name='email' value='' >")
    data = createData('text', 'email', [
        { type: 'email', errorMessage: 'Please enter a valid email address' },
        { type: 'required', errorMessage: 'Email is required' }
      ])

    assertValidationEquals(data, [{ name: 'email', errorMessage: 'Email is required' }])

  it 'returns an array of error objects if the minimum length is not met', ->
    setFixtures("<input type='text' name='text' value='minimum' >")
    data = createData('text', 'text', [
        { type: 'minLength', length: 8, errorMessage: 'Minimum length is 8 characters' },
        { type: 'required', errorMessage: 'This field is required' }
      ])

    assertValidationEquals(data, [{ name: 'text', errorMessage: 'Minimum length is 8 characters' }])

  it 'returns true if no errors exist', ->
    setFixtures("<input type='text' name='noErrors' value='Some Text' >")
    data = createData('text', 'noErrors', [
        { type: 'maxLength', length: 10, errorMessage: 'Maximum length is 10 characters' },
        { type: 'required', errorMessage: 'This field is required' }
      ])

    assertValidationEquals(data, true)

  it 'returns an array of error objects if a radio button is required and left unchecked', ->
    setFixtures("<input type='radio' name='radioName' value='Option 1'><input type='radio' name='radioName' value='Option 2'>")
    data = createData('radio', 'radioName', [
        { type: 'required', errorMessage: 'This field is required' }
      ])

    assertValidationEquals(data, [{ name: 'radioName', errorMessage: 'This field is required' }])

  xit 'returns an array of error objects if a select is required and unselected', ->
    setFixtures("<select name='selectList'><option>Option 1</option><option>Option 2</option></select>")
    data = createData('select','selectList', [
        { type: 'required', errorMessage: 'This field is required' }
      ])

    assertValidationEquals(data, [{ name: 'selectList', errorMessage: 'This field is required' }])
