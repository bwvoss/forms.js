describe 'Form.Validator.Factory', ->

  assertNewValidator = (validatorString, validatorObject) ->
    validationFactory = new Form.Validator.Factory
    expect(validationFactory.build(validatorString)).toEqual(validatorObject)

  it 'builds a new required validator', ->
    requiredValidator = new Form.Validator.Required
    assertNewValidator('required', requiredValidator)

  it 'builds a new email validator', ->
    emailValidator = new Form.Validator.Email
    assertNewValidator('email', emailValidator)

  it 'builds a new max length validator', ->
    maxLengthValidator = new Form.Validator.MaxLength
    assertNewValidator('maxLength', maxLengthValidator)

  it 'builds a new min length validator', ->
    minLengthValidator = new Form.Validator.MinLength
    assertNewValidator('minLength', minLengthValidator)

