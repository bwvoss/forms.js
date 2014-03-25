describe 'FormsJs.Form.Validator.RegExp', ->

  it 'takes a custom regular expression and returns false when value does not match', ->
    regExp = /[^0-9]+/
    value = '12345'
    regExpValidator = new FormsJs.Form.Validator.RegExp

    expect(regExpValidator.isValid(value, undefined, regExp)).toBeFalsy()

  it 'takes a custom regular expression and returns true when the value does match', ->
    regExp = /(?:\d{3}|\(\d{3}\))([-\/\.])\d{3}\1\d{4}/
    value = '123-456-7890'
    regExpValidator = new FormsJs.Form.Validator.RegExp

    expect(regExpValidator.isValid(value, undefined, regExp)).toBeTruthy()

  it 'takes a custom regular expression and returns true when the value is blank and not required', ->
    regExp = /\W+/
    value = ''
    regExpValidator = new FormsJs.Form.Validator.RegExp

    expect(regExpValidator.isValid(value, undefined, regExp)).toBeTruthy()

