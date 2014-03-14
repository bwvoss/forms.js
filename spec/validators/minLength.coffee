describe 'Form.Validator.MinLength', ->
  minLengthValidator = {}

  beforeEach ->
    minLengthValidator = new Form.Validator.MinLength

  it 'should return true when the value is more than the minimum length', ->
    expect(minLengthValidator.isValid('More than min', 13)).toBeTruthy()

  it 'should return false when the value is less than the minimum length', ->
    expect(minLengthValidator.isValid('Less than min', 14)).toBeFalsy()

  it 'should return true when the value is blank and not required', ->
    expect(minLengthValidator.isValid('', 5)).toBeTruthy()

