namespace('FormsJs')

class FormsJs.Errors

  @get: (data, scope) ->
    fieldErrors = {}
    errorMessages = []
    value = FormsJs.Values.get(data, scope)

    _.each data.validations, (validator) ->
      valid = FormsJs.Validator.isValid(validator, value, scope)
      errorMessages.push validator.errorMessage unless valid

    unless errorMessages.length is 0
      fieldErrors[data.name] = errorMessages
    fieldErrors
