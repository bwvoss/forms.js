namespace('FormsJs')

class FormsJs.Serializer

  @serialize: (element, scope) ->
    formData = {}
    value = FormsJs.Values.get(element, scope)
    key = @getKey(element)
    formData[key] = value
    formData

  @getKey: (element) ->
    if element.dataKey
      element.dataKey
    else
      element.name

