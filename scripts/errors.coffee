namespace('FormsJs.Form')

class FormsJs.Form.Errors

  @get: (data) ->
    fieldErrors = {}
    errorMessages = []
    value = FormsJs.Form.Values.get(data)

    _.each data.validations, (validator) ->
      valid = FormsJs.Form.Validator.isValid(validator, value)
      errorMessages.push validator.errorMessage unless valid

    unless errorMessages.length is 0
      fieldErrors[data.name] = errorMessages
    fieldErrors
