describe 'Form.Validator.MinLength', ->

  it 'should return true when the value is more than the minimum length', ->
    minLengthValidator = new Form.Validator.MinLength

    expect(minLengthValidator.isValid('More than min', 13)).toBeTruthy()

  it 'should return false when the value is less than the minimum length', ->
    minLengthValidator = new Form.Validator.MinLength

    expect(minLengthValidator.isValid('Less than min', 14)).toBeFalsy()

