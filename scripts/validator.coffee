namespace('FormsJs')

class FormsJs.Validator

  constructor: (data, scope = FormsJs.Defaults.SCOPE) ->
    @data = data
    @scope = scope

  isValid: ->
    _.all @data, (element) =>
      value = FormsJs.Values.get(element, @scope)
      @_checkAllValidations(element.validations, value)

  errors: ->
    _.reduce @data, (errors, element) =>
      _.extend(errors, @_getSelectorAndErrors(element))
      errors
    , {}

  _getSelectorAndErrors: (element) ->
    fieldErrors = {}
    value = FormsJs.Values.get(element, @scope)
    valid = @_checkAllValidations(element.validations, value)

    if !valid
      messages = @_getMessages(element)
      fieldErrors[element.elementSelector] = messages

    fieldErrors

  _checkAllValidations: (validations, value) ->
    validationFactory = new FormsJs.Validator.Factory
    _.all validations, (validator) =>
      validationFactory.build(validator).isValid(value, @scope)

  _getMessages: (element) ->
    errorMessages = []
    _.each element.validations, (validator) ->
      errorMessages.push validator.errorMessage
    errorMessages
