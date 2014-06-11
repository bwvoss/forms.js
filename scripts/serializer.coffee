namespace('FormsJs')

class FormsJs.Serializer

  @serialize: (element, scope) ->
    formData = {}
    value = FormsJs.Values.get(element, scope)
    key = @getKey(element, scope)
    formData[key] = value
    formData

  @getKey: (element, scope) ->
    if element.dataKey
      element.dataKey
    else
      FormsJs.Scope.getName(element, scope)

