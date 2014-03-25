describe 'FormsJs.Form.Validator.Email', ->

  emailValidator = {}

  beforeEach ->
    emailValidator = new FormsJs.Form.Validator.Email()

  it 'returns false when an email is expected but does not match', ->
    expect(emailValidator.isValid('example.com')).toBeFalsy()

  it 'returns true when an email is expected and matches', ->
    expect(emailValidator.isValid('me@example.com')).toBeTruthy()

  it 'returns true when an email is blank and not required', ->
    expect(emailValidator.isValid('')).toBeTruthy()
