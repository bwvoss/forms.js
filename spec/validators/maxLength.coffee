describe 'Form.Validator.MaxLength', ->
  maxLengthValidator = {}

  beforeEach ->
    validator = { type: 'maxLength', length: 13 }
    maxLengthValidator = new FormsJs.Form.Validator.MaxLength(validator)

  it 'returns true if a text field has less characters than the max length', ->
    expect(maxLengthValidator.isValid('Less than max')).toBeTruthy()

  it 'returns false if a text field has more characters than the max length', ->
    expect(maxLengthValidator.isValid('More than the max')).toBeFalsy()
