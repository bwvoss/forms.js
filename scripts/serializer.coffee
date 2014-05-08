namespace('FormsJs')

class FormsJs.Serializer

  @serialize: (element) ->
    formData = {}
    value = FormsJs.Values.get(element)
    formData[element.name] = value
    formData

