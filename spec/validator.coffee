describe 'Form.Validator', ->

  it 'returns false if an email is required but empty', ->
    setFixtures("<input type='text' name='email' value='' />")
    data = { 
      name: 'email'
      validations: [
        { type: 'email' },
        { type: 'required' }
      ]
    }

    expect(Form.Validator.isValid(data)).toBeFalsy()

  it 'returns false if the minimum length is not met', ->
    setFixtures("<input type='text' name='text' value='minimum' />")
    data = { 
      name: 'text'
      validations: [
        { type: 'minLength', length: 8 },
        { type: 'required' }
      ]
    }

    expect(Form.Validator.isValid(data)).toBeFalsy()
