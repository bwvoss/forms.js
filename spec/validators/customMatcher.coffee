describe 'FormsJs.Form.Validators.CustomMatcher', ->
  validation = {
        type: 'customMatcher',
        errorMessage: 'This field is more complex',
        matcher: (value) -> false
  }

  newValidator = (validation) ->
    new FormsJs.Form.Validator.CustomMatcher(validation)

  it 'returns false using a custom validation function', ->
    customValidator = newValidator(validation)
    expect(customValidator.isValid('test')).toBeFalsy()

  it 'returns true when using a custom validation function', ->
    validation.matcher = (value) -> true
    customValidator = newValidator(validation)

    expect(customValidator.isValid('test')).toBeTruthy()

  it 'returns true when no custom function is defined', ->
    validation.matcher = undefined
    customValidator = newValidator(validation)

    expect(customValidator.isValid('test')).toBeTruthy()
