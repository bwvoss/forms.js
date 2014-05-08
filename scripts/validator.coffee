namespace('FormsJs')

class FormsJs.Validator

  @isValid: (validator, value) ->
    validationFactory = new FormsJs.Validator.Factory
    validationFactory.build(validator).isValid(value)

