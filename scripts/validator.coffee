namespace('FormsJs.Form')

class FormsJs.Form.Validator

  @allValidations: (validations, value, name) ->
    validationFactory = new FormsJs.Form.Validator.Factory
    _.all validations, (validation) =>
      (validationFactory.build(validation.type)).isValid(value, validation.length, validation.regEx)

  @isValid: (data) ->
    validations = data.validations
    value = FormsJs.Form.Values.get(data)
    @allValidations(validations, value, data.name)

