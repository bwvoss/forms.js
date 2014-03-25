describe 'Form.Validator.Factory', ->

  assertNewValidator = (validatorString, validatorObject) ->
    validationFactory = new FormsJs.Form.Validator.Factory
    expect(validationFactory.build(validatorString)).toEqual(validatorObject)

  it 'builds a new required validator', ->
    requiredValidator = new FormsJs.Form.Validator.Required
    assertNewValidator('required', requiredValidator)

  it 'builds a new email validator', ->
    emailValidator = new FormsJs.Form.Validator.Email
    assertNewValidator('email', emailValidator)

  it 'builds a new max length validator', ->
    maxLengthValidator = new FormsJs.Form.Validator.MaxLength
    assertNewValidator('maxLength', maxLengthValidator)

  it 'builds a new min length validator', ->
    minLengthValidator = new FormsJs.Form.Validator.MinLength
    assertNewValidator('minLength', minLengthValidator)

  it 'build a new regexp validator', ->
    regExpValidator = new FormsJs.Form.Validator.RegExp
    assertNewValidator('regExp', regExpValidator)

