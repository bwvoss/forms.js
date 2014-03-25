describe 'Form.Validator.MinLength', ->
  minLengthValidator = {}

  beforeEach ->
    validator = { type: 'minLength', length: 14 }
    minLengthValidator = new FormsJs.Form.Validator.MinLength(validator)

  it 'should return true when the value is more than the minimum length', ->
    expect(minLengthValidator.isValid('More than the min')).toBeTruthy()

  it 'should return false when the value is less than the minimum length', ->
    expect(minLengthValidator.isValid('Less than min')).toBeFalsy()

  it 'should return true when the value is blank and not required', ->
    expect(minLengthValidator.isValid('')).toBeTruthy()

