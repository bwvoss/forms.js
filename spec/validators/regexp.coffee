describe 'FormsJs.Form.Validator.RegExp', ->

  newValidator = (validation) ->
    new FormsJs.Form.Validator.RegExp(validation)

  it 'takes a custom regular expression and returns false when value does not match', ->
    validation = { pattern: /[^0-9]+/ }
    regExpValidator = newValidator(validation)

    expect(regExpValidator.isValid('12345')).toBeFalsy()

  it 'takes a custom regular expression and returns true when the value does match', ->
    validation = { pattern: /(?:\d{3}|\(\d{3}\))([-\/\.])\d{3}\1\d{4}/ }
    regExpValidator = newValidator(validation)

    expect(regExpValidator.isValid('123-456-7890')).toBeTruthy()

  it 'takes a custom regular expression and returns true when the value is blank and not required', ->
    validation = { pattern: /\W+/ }
    regExpValidator = newValidator(validation)

    expect(regExpValidator.isValid('')).toBeTruthy()

  it 'returns true if a custom regular expression is not defined', ->
    validation = { }
    regExpValidator = newValidator(validation)

    expect(regExpValidator.isValid('anything')).toBeTruthy()
