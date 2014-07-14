describe 'FormsJs.Validator.Required', ->

  requiredValidator = {}

  beforeEach ->
    requiredValidator = new FormsJs.Validator.Required

  it 'returns false when a text field or select list is required and value is blank', ->
    expect(requiredValidator.isValid('')).toBeFalsy()

  it 'returns false when a radio button is required and the value is undefined', ->
    expect(requiredValidator.isValid(undefined)).toBeFalsy()

  it 'returns false when a checkbox is required and the value is an empty array', ->
    expect(requiredValidator.isValid([])).toBeFalsy()

  it 'returns false when a text field only has whitespace characters', ->
    expect(requiredValidator.isValid('  ')).toBeFalsy()

  it 'returns true when a text field is required and value is not blank', ->
    expect(requiredValidator.isValid('some value')).toBeTruthy()

  it 'returns true when a checkbox is required and the value is a filled array', ->
    expect(requiredValidator.isValid(['something'])).toBeTruthy()

