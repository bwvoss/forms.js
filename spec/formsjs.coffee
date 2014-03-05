testForm = {
  type: 'text'
  attr: '[data-id=text]'
  validations: '[email, new(emailValidation)]'
  value: 'hello'
  name: 'text'
}

myForm = new FormsJS(testForm)

describe 'FormsJS', =>

  it 'instantiates a new forms object', =>
    expect(myForm.object.type).toEqual('text')

