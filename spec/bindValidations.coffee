myForm = {
  name: 'textBox2'
  value: 'Default Value'
  validations: ['some validation']
}

describe 'Bind Validations', ->

  it 'binds the change event to a text input element for validation', ->
    setFixtures("<input type='text' name='textBox2' />")
    bindValidations(myForm)
    expect($("[name='textBox2']")).toHandle 'change'
