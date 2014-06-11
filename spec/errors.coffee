describe 'FormsJs.Errors', ->

  data = {
    type: 'text',
    elementSelector: '[data-id=email]',
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
    value = 'example.com'
    setFixtures("<input type='text' data-id='email' value=#{value}>")
    expect(FormsJs.Errors.get(data)).toEqual({ '[data-id=email]': ['Please enter a valid email', 'Email should be a minimum of 15 characters'] })

  it 'returns an empty array if all form elements are true', ->
    value = 'fiveteen@example.com'
    setFixtures("<input type='text' data-id='email' value=#{value}>")
    expect(FormsJs.Errors.get(data)).toEqual({ })

