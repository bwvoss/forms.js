describe 'Validate', ->

  it 'returns false when a field is required and value is blank', ->
    setFixtures("<input type='text' name='textBox' value='' />")
    data = {
      name: 'textBox'
      validations: ['required']
    }

    expect(isValid(data)).toBe(false)

  it 'returns true when a field is required and value is not blank', ->
    setFixtures("<input type='text' name='textBox' value='Some Value' />")
    data = {
      name: 'textBox'
      validations: ['required']
    }

    expect(isValid(data)).toBe(true)

  it 'returns false when an email is expected but does not match', ->
    setFixtures("<input type='text' name='email' value='example.com' />")
    data = {
      name: 'email'
      validations: ['email']
    }

    expect(isValid(data)).toBe(false)

  it 'returns true when an email is expected and matches', ->
    setFixtures("<input type='text' name='email' value='test@example.com' />")
    data = {
      name: 'email'
      validations: ['email']
    }

    expect(isValid(data)).toBe(true)
