namespace('FormsJs')

class FormsJs.Errors

  @get: (data) ->
    fieldErrors = {}
    errorMessages = []
    value = FormsJs.Values.get(data)

    _.each data.validations, (validator) ->
      valid = FormsJs.Validator.isValid(validator, value)
      errorMessages.push validator.errorMessage unless valid

    unless errorMessages.length is 0
      fieldErrors[data.name] = errorMessages
    fieldErrors
