namespace('FormsJs.Form')

class FormsJs.Form.Serializer

  @serialize: (element) ->
    formData = {}
    value = FormsJs.Form.Values.get(element)
    formData[element.name] = value
    formData

