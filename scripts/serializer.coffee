namespace('FormsJs')

class FormsJs.Serializer

  @serialize: (element, scope) ->
    formData = {}
    value = FormsJs.Values.get(element, scope)
    formData[element.name] = value
    formData

