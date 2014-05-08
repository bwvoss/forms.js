describe 'FormsJs.Validator.MatchingInput', ->
  validation = {
        type: 'matchingInput',
        matchField: 'password',
        errorMessage: 'Must match password'
  }

  newValidator = (validation) ->
    new FormsJs.Validator.MatchingInput(validation)

  it 'returns true when two fields have the same input', ->
    setFixtures("<input type='text' name='password' value='P@ssword' ><input type='text' name='passwordConfirm' value='P@ssword'>")
    matchingInputValidator = newValidator(validation)

    expect(matchingInputValidator.isValid('P@ssword')).toBeTruthy()

  it 'returns false when two fields have different input', ->
    setFixtures("<input type='text' name='password' value='P@ssword' ><input type='text' name='passwordConfirm' value='other'>")
    matchingInputValidator = newValidator(validation)

    expect(matchingInputValidator.isValid('other')).toBeFalsy()

  it 'returns true if no additional field is defined', ->
    setFixtures("<input type='text' name='password' value='P@ssword' ><input type='text' name='passwordConfirm' value='P@ssword'>")
    validation.matchField = undefined
    matchingInputValidator = newValidator(validation)

    expect(matchingInputValidator.isValid('P@ssword')).toBeTruthy()

