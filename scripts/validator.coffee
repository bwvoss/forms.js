namespace('FormsJs')

class FormsJs.Validator

  @isValid: (validator, value, scope) ->
    validationFactory = new FormsJs.Validator.Factory
    validationFactory.build(validator).isValid(value, scope)

