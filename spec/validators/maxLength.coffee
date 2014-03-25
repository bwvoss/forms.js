describe 'Form.Validator.MaxLength', ->
  maxLengthValidator = {}

  beforeEach ->
    maxLengthValidator = new FormsJs.Form.Validator.MaxLength

  it 'returns true if a text field has less characters than the max length', ->
    expect(maxLengthValidator.isValid('Less than max', 13)).toBeTruthy()

  it 'returns false if a text field has more characters than the max length', ->
    expect(maxLengthValidator.isValid('More than max', 12)).toBeFalsy()
