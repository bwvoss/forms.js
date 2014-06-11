describe 'FormsJs.Validator', ->

  validatorTest = (validator, value, scope = '#jasmine-fixtures') ->
    FormsJs.Validator.isValid(validator, value, scope)

  it 'builds an email validator and returns false when value does not match email reg exp', ->
    validator = { type: 'email' }
    value = 'example.com'

    expect(validatorTest(validator, value)).toBeFalsy()

  it 'builds a required validator and returns false when value is undefined', ->
    validator = { type: 'required' }
    value = undefined

    expect(validatorTest(validator, value)).toBeFalsy()

  it 'builds a min length validator and returns false when value is less than min', ->
    validator = { type: 'minLength', length: 5 }
    value = 'two'

    expect(validatorTest(validator, value)).toBeFalsy()

  it 'builds a max length validator and returns false when value is more than max', ->
    validator = { type: 'maxLength', length: 5 }
    value = 'eleven'

    expect(validatorTest(validator, value)).toBeFalsy()

  it 'builds a regexp validator and returns false when value does not match', ->
    validator = { type: 'regExp', pattern: /[a-zA-z]+/ }
    value = 12345

    expect(validatorTest(validator, value)).toBeFalsy()

  it 'builds a custom validator and returns false when value does not pass function', ->
    myFunction = (value) -> false
    validator = { type: 'customMatcher', matcher: myFunction }
    value = 12345

    expect(validatorTest(validator, value)).toBeFalsy()

  it 'builds a matching input validator and returns false when value does not match another field', ->
    setFixtures("<input type='text' name='password' value='P@ssword'>")
    validator = { type: 'matchingInput', matchField: '[name=password]' }
    value = 12345

    expect(validatorTest(validator, value)).toBeFalsy()

  it 'builds an email validator and returns true when value does match email reg exp', ->
    validator = { type: 'email' }
    value = 'me@example.com'

    expect(validatorTest(validator, value)).toBeTruthy()

  it 'builds a required validator and returns true when value is something', ->
    validator = { type: 'required' }
    value = 'something'

    expect(validatorTest(validator, value)).toBeTruthy()

  it 'builds a min length validator and returns true when value is more than min', ->
    validator = { type: 'minLength', length: 5 }
    value = 'eleven'

    expect(validatorTest(validator, value)).toBeTruthy()

  it 'builds a max length validator and returns true when value is less than max', ->
    validator = { type: 'maxLength', length: 5 }
    value = 'four'

    expect(validatorTest(validator, value)).toBeTruthy()

  it 'builds a regexp validator and returns true when value does match', ->
    validator = { type: 'regExp', pattern: /[a-zA-z]+/ }
    value = 'abcde'

    expect(validatorTest(validator, value)).toBeTruthy()

  it 'builds a custom validator and returns true when value passes a function', ->
    myFunction = (value) -> true
    validator = { type: 'customMatcher', matcher: myFunction }
    value = 12345

    expect(validatorTest(validator, value)).toBeTruthy()

  it 'builds a matching input validator and returns true when value matchs another field', ->
    setFixtures("<input type='text' name='password' value='P@ssword'>")
    validator = { type: 'matchingInput', matchField: '[name=password]' }
    value = 'P@ssword'

    expect(validatorTest(validator, value)).toBeTruthy()

