describe 'FormsJs.Validator.Factory', ->

  assertNewValidator = (validator, validatorObject) ->
    validationFactory = new FormsJs.Validator.Factory
    expect(validationFactory.build(validator)).toEqual(validatorObject)

  it 'builds a new required validator', ->
    validator = { type: 'required' }
    requiredValidator = new FormsJs.Validator.Required(validator)
    assertNewValidator(validator, requiredValidator)

  it 'builds a new email validator', ->
    validator = { type: 'email' }
    emailValidator = new FormsJs.Validator.Email(validator)
    assertNewValidator(validator, emailValidator)

  it 'builds a new max length validator', ->
    validator = { type: 'maxLength' }
    maxLengthValidator = new FormsJs.Validator.MaxLength(validator)
    assertNewValidator(validator, maxLengthValidator)

  it 'builds a new min length validator', ->
    validator = { type: 'minLength' }
    minLengthValidator = new FormsJs.Validator.MinLength(validator)
    assertNewValidator(validator, minLengthValidator)

  it 'builds a new regexp validator', ->
    validator = { type: 'regExp' }
    regExpValidator = new FormsJs.Validator.RegExp(validator)
    assertNewValidator(validator, regExpValidator)

  it 'builds a new custom matcher validator', ->
    validator = { type: 'customMatcher' }
    customValidator = new FormsJs.Validator.CustomMatcher(validator)
    assertNewValidator(validator, customValidator)

  it 'builds a new matching input validator', ->
    validator = { type: 'matchingInput' }
    customValidator = new FormsJs.Validator.MatchingInput(validator)
    assertNewValidator(validator, customValidator)

