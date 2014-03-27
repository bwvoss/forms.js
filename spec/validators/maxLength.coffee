describe 'Form.Validator.MaxLength', ->
  validation = { type: 'maxLength', length: 14 }

  newValidator = (validation) ->
      new FormsJs.Form.Validator.MaxLength(validation)

  it 'returns true if a text field has less characters than the max length', ->
    maxLengthValidator = newValidator(validation)

    expect(maxLengthValidator.isValid('Less than max')).toBeTruthy()

  it 'returns false if a text field has more characters than the max length', ->
    maxLengthValidator = newValidator(validation)

    expect(maxLengthValidator.isValid('More than the max')).toBeFalsy()

  it 'returns true if a length is undefined', ->
    validation.length = undefined
    maxLengthValidator = newValidator(validation)

    expect(maxLengthValidator.isValid('More than the max')).toBeTruthy()
