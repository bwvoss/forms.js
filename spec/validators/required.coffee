describe 'Form.Validator.Required', ->

  requiredValidator = {}

  beforeEach ->
    requiredValidator = new Form.Validator.Required

  it 'returns false when a text field is required and value is blank', ->
    expect(requiredValidator.isValid('')).toBeFalsy()

  it 'returns true when a text field is required and value is not blank', ->
    expect(requiredValidator.isValid('some value')).toBeTruthy()

