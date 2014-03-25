describe 'FormsJs.Form.Validator.RegExp', ->

  it 'takes a custom regular expression and returns false when value does not match', ->
    validator = { pattern: /[^0-9]+/ }
    value = '12345'
    regExpValidator = new FormsJs.Form.Validator.RegExp(validator)

    expect(regExpValidator.isValid(value)).toBeFalsy()

  it 'takes a custom regular expression and returns true when the value does match', ->
    validator = { pattern: /(?:\d{3}|\(\d{3}\))([-\/\.])\d{3}\1\d{4}/ }
    value = '123-456-7890'
    regExpValidator = new FormsJs.Form.Validator.RegExp(validator)

    expect(regExpValidator.isValid(value)).toBeTruthy()

  it 'takes a custom regular expression and returns true when the value is blank and not required', ->
    validator = { pattern: /\W+/ }
    value = ''
    regExpValidator = new FormsJs.Form.Validator.RegExp(validator)

    expect(regExpValidator.isValid(value)).toBeTruthy()

