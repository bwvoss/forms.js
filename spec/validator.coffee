describe 'Form.Validator', ->

  createFixtures = (name, value) ->
    setFixtures("<input type='text' name='#{name}' value='#{value}' />")

  createData = (name, validations) ->
    data = {}
    data.name = name
    data.validations = validations
    data

  assertValidationEquals = (data, value) ->
    expect(Form.Validator.isValid(data)).toEqual(value)

  it 'returns an array of error objects if an email is required but empty', ->
    createFixtures('email', '')
    data = createData('email', [
        { type: 'email', errorMessage: 'Please enter a valid email address' },
        { type: 'required', errorMessage: 'Email is required' }
      ])

    assertValidationEquals(data, [{ name: 'email', errorMessage: 'Email is required' }])

  it 'returns an array of error objects if the minimum length is not met', ->
    createFixtures('text', 'minimum')
    data = createData('text', [
        { type: 'minLength', length: 8, errorMessage: 'Minimum length is 8 characters' },
        { type: 'required', errorMessage: 'This field is required' }
      ])

    assertValidationEquals(data, [{ name: 'text', errorMessage: 'Minimum length is 8 characters' }])

  it 'returns true if no errors exist', ->
    createFixtures('noErrors', 'Some Text')
    data = createData('noErrors', [
        { type: 'maxLength', length: 10, errorMessage: 'Maximum length is 10 characters' },
        { type: 'required', errorMessage: 'This field is required' }
      ])

    assertValidationEquals(data, true)

