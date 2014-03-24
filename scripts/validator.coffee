namespace('FormsJs.Form')

class FormsJs.Form.Validator

  allValidations = (validations, value, name) ->
    validationFactory = new Form.Validator.Factory
    _.all validations, (validation) =>
      (validationFactory.build(validation.type)).isValid(value, validation.length)

  @isValid: (data) ->
    validations = data.validations
    value = FormsJs.Form.Values.get(data)
    allValidations(validations, value, data.name)

