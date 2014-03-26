namespace('FormsJs.Form')

class FormsJs.Form.Errors

  @get: (data) ->
    errorsList = []
    value = FormsJs.Form.Values.get(data)
    _.each data.validations, (validator) ->
      valid = FormsJs.Form.Validator.isValid(validator, value)
      if not valid then errorsList.push validator.errorMessage
    errorsList
