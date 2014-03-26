describe 'FormsJs.Form.Validators.CustomMatcher', ->

  it 'returns false using a custom validation function', ->
    validation = {
        type: 'customMatcher',
        errorMessage: 'This field is more complex',
        matcher: (value) ->
          false
      }

    customValidator = new FormsJs.Form.Validator.CustomMatcher(validation)

    expect(customValidator.isValid('test')).toBeFalsy()

  it 'returns true when using a custom validation function', ->
    validation = {
        type: 'customMatcher',
        errorMessage: 'This field is more complex',
        matcher: (value) ->
          if value
            true
          else
            false
      }

    customValidator = new FormsJs.Form.Validator.CustomMatcher(validation)

    expect(customValidator.isValid('test')).toBeTruthy()

