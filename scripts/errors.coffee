namespace('FormsJs.Form')

class FormsJs.Form.Errors

  addToErrorList = (errorList, name, message) ->
    error = { name: name, errorMessage: message }
    errorList.push error

  @get: (data) ->
    errorsList = []
