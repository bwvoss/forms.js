namespace('FormsJs')

class FormsJs.Validator

  constructor: (data, scope = FormsJs.Defaults.SCOPE) ->
    @data = data
    @scope = scope

  isValid: ->
    validationFactory = new FormsJs.Validator.Factory
    _.all @data, (element) =>
      value = FormsJs.Values.get(element, @scope)
      _.all element.validations, (validator) =>
        validationFactory.build(validator).isValid(value, @scope)

  errors: ->
    _.reduce @data, (errors, element) =>
      _.extend(errors, @getMessages(element, @scope))
      errors
    , {}

  getMessages: (element, scope) ->
    fieldErrors = {}
    errorMessages = []
    validationFactory = new FormsJs.Validator.Factory
    value = FormsJs.Values.get(element, scope)

    _.each element.validations, (validator) ->
      valid = validationFactory.build(validator).isValid(value, @scope)
      errorMessages.push validator.errorMessage unless valid

    unless errorMessages.length is 0
      fieldErrors[element.elementSelector] = errorMessages
    fieldErrors
