describe 'Form.Validator.Required', ->

  requiredValidator = {}

  beforeEach ->
    requiredValidator = new FormsJs.Form.Validator.Required

  it 'returns false when a text field or select list is required and value is blank', ->
    expect(requiredValidator.isValid('')).toBeFalsy()

  it 'returns true when a text field is required and value is not blank', ->
    expect(requiredValidator.isValid('some value')).toBeTruthy()

  it 'returns false when a radio button or checkbox is required and the value is undefined', ->
    expect(requiredValidator.isValid(undefined)).toBeFalsy()

