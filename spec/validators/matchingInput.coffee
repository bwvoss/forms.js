describe 'FormsJs.Validator.MatchingInput', ->
  validation = {
        type: 'matchingInput',
        matchField: 'password',
        errorMessage: 'Must match password'
  }

  newValidator = (validation) ->
    new FormsJs.Validator.MatchingInput(validation)

  it 'returns true when two fields have the same input', ->
    scope = '#jasmine-fixtures'
    value = 'P@ssword'
    setFixtures("<input type='text' name='password' value='P@ssword' ><input type='text' name='passwordConfirm' value='#{value}'>")
    matchingInputValidator = newValidator(validation)

    expect(matchingInputValidator.isValid(value, scope)).toBeTruthy()

  it 'returns false when two fields have different input', ->
    scope = '#jasmine-fixtures'
    value = 'other'
    setFixtures("<input type='text' name='password' value='P@ssword' ><input type='text' name='passwordConfirm' value='#{value}>")
    matchingInputValidator = newValidator(validation)

    expect(matchingInputValidator.isValid(value, scope)).toBeFalsy()

  it 'returns true if no additional field is defined', ->
    scope = '#jasmine-fixtures'
    value = 'P@ssword'
    setFixtures("<input type='text' name='password' value='P@ssword' ><input type='text' name='passwordConfirm' value='#{value}'>")
    validation.matchField = undefined
    matchingInputValidator = newValidator(validation)

    expect(matchingInputValidator.isValid(value, scope)).toBeTruthy()

