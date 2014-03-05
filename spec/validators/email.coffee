describe 'FormsJs.Form.Validator.Email', ->
  validation = { type: 'email', errorMessage: 'Please enter a valid email address' }

  newValidator = (validation) ->
    new FormsJs.Form.Validator.Email(validation)

  it 'returns false when an email is expected but does not match', ->
    emailValidator = newValidator(validation)
    expect(emailValidator.isValid('example.com')).toBeFalsy()

  it 'returns true when an email is expected and matches', ->
    emailValidator = newValidator(validation)
    expect(emailValidator.isValid('me@example.com')).toBeTruthy()

  it 'returns true when an email is blank and not required', ->
    emailValidator = newValidator(validation)
    expect(emailValidator.isValid('')).toBeTruthy()
