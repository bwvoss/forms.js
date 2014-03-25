describe 'FormsJs.Form.Validator', ->

  createData = (type, name, validations) ->
    data = {}
    data.type = type
    data.name = name
    data.validations = validations
    data

  assertValidationEquals = (data, value) ->
    expect(FormsJs.Form.Validator.isValid(data)).toEqual(value)

  it 'returns false if an email is required but empty', ->
    setFixtures("<input type='text' name='email' value='' >")
    data = createData('text', 'email', [
        { type: 'email', errorMessage: 'Please enter a valid email address' },
        { type: 'required', errorMessage: 'Email is required' }
      ])

    assertValidationEquals(data, false)

  it 'returns false if the minimum length is not met', ->
    setFixtures("<input type='text' name='text' value='minimum' >")
    data = createData('text', 'text', [
        { type: 'minLength', length: 8, errorMessage: 'Minimum length is 8 characters' },
        { type: 'required', errorMessage: 'This field is required' }
      ])

    assertValidationEquals(data, false)

  it 'returns true if no errors exist', ->
    setFixtures("<input type='text' name='noErrors' value='Some Text' >")
    data = createData('text', 'noErrors', [
        { type: 'maxLength', length: 10, errorMessage: 'Maximum length is 10 characters' },
        { type: 'required', errorMessage: 'This field is required' }
      ])

    assertValidationEquals(data, true)

  it 'returns false if a radio button is required and left unchecked', ->
    setFixtures("<input type='radio' name='radioName' value='Option 1'><input type='radio' name='radioName' value='Option 2'>")
    data = createData('radio', 'radioName', [
        { type: 'required', errorMessage: 'This field is required' }
      ])

    assertValidationEquals(data, false)

  it 'returns true if a select is required and selected', ->
    setFixtures("<select name='selectList'><option value=''>--Please Select One--</option><option selected='selected'>Option 1</option><option>Option 2</option></select>")
    data = createData('select','selectList', [
        { type: 'required', errorMessage: 'This field is required' }
      ])

    assertValidationEquals(data, true)

  it 'returns true if a custom validator is used for a phone number', ->
    setFixtures("<input type='text' name='phone' value='123-456-7890' >")
    data = createData('text', 'phone', [
      { type: 'phoneValidator', regEx: /(?:\d{3}|\(\d{3}\))([-\/\.])\d{3}\1\d{4}/, errorMessage: 'Please enter a valid phone number as ###-###-####' }
      ])

    assertValidationEquals(data, true)
