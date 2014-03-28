describe 'FormsJs.Form.Errors', ->

  data = {
    type: 'text',
    name: 'email',
    validations: [
      {
        type: 'email',
        errorMessage: 'Please enter a valid email'
      },
      {
        type: 'minLength',
        length: 15
        errorMessage: 'Email should be a minimum of 15 characters'
      }
    ]
  }

  it 'returns an object with the field name and an array of error messages if a field is invalid', ->
    setFixtures("<input type='text' name='email' value='example.com'>")
    expect(FormsJs.Form.Errors.get(data)).toEqual({ email: ['Please enter a valid email', 'Email should be a minimum of 15 characters'] })

  it 'returns an empty array if all form elements are true', ->
    setFixtures("<input type='text' name='email' value='fiveteen@example.com'>")
    expect(FormsJs.Form.Errors.get(data)).toEqual({ })

