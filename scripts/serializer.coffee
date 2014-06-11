namespace('FormsJs')

class FormsJs.Serializer

  constructor: (data, scope = FormsJs.Defaults.SCOPE) ->
    @data = data
    @scope = scope

  serialize: ->
    _.reduce @data, (formData, element) =>
      _.extend(formData, @getFormData(element))
      formData
    , {}

  getFormData: (element) ->
    formData = {}
    value = FormsJs.Values.get(element, @scope)
    key = @getKey(element)
    formData[key] = value
    formData

  getKey: (element) ->
    if element.dataKey
      element.dataKey
    else
      FormsJs.Scope.getName(element, @scope)

