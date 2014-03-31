namespace('FormsJs.Form')

class FormsJs.Form.Validator

  @isValid: (validator, value) ->
    validationFactory = new FormsJs.Form.Validator.Factory
    validationFactory.build(validator).isValid(value)

