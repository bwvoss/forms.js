namespace('FormsJs.Form')

class FormsJs.Form.Validator

  @allValidations: (validations, value, name) ->
    validationFactory = new FormsJs.Form.Validator.Factory
    _.all validations, (validation) =>
      (validationFactory.build(validation)).isValid(value)

  @isValid: (data) ->
    value = FormsJs.Form.Values.get(data)
    @allValidations(data.validations, value)

