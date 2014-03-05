describe 'Form.Validator.MinLength', ->
  validation = { type: 'minLength', length: 14 }

  newValidator = (validation) ->
    new FormsJs.Form.Validator.MinLength(validation)

  it 'should return true when the value is more than the minimum length', ->
    minLengthValidator = newValidator(validation)

    expect(minLengthValidator.isValid('More than the min')).toBeTruthy()

  it 'should return false when the value is less than the minimum length', ->
    minLengthValidator = newValidator(validation)

    expect(minLengthValidator.isValid('Less than min')).toBeFalsy()

  it 'should return true when the value is blank and not required', ->
    minLengthValidator = newValidator(validation)

    expect(minLengthValidator.isValid('')).toBeTruthy()

  it 'should return true when the length is undefined', ->
    validation.length = undefined
    minLengthValidator = newValidator(validation)

    expect(minLengthValidator.isValid('anything')).toBeTruthy()
