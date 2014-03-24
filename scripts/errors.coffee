namespace('FormsJs.Form')

class FormsJs.Form.Errors

  @apply: (data) ->
    $("span[name=#{data.name}]").text(data.errorMessage)


  addToErrorList = (errorList, name, message) ->
    error = { name: name, errorMessage: message }
    errorList.push error


