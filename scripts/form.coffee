namespace('FormsJs')

class FormsJs.Form

  DEFAULT_SCOPE = $(document)

  constructor: (data, scope = DEFAULT_SCOPE) ->
    @data = data
    @scope = scope

  populate: ->
    _.each @data, (element) =>
      FormsJs.Populator.populate(element, @scope)

  isValid: ->
    _.all @data, (element) =>
      value = FormsJs.Values.get(element, @scope)
      _.all element.validations, (validator) ->
        FormsJs.Validator.isValid(validator, value)

  errors: ->
    _.reduce @data, (errors, element) =>
      _.extend(errors, FormsJs.Errors.get(element, @scope))
      errors
    , {}

  serialize: ->
    _.reduce @data, (formData, element) =>
      _.extend(formData, FormsJs.Serializer.serialize(element, @scope))
      formData
    , {}

  clear: ->
    _.each @data, (element) =>
      FormsJs.Clear.valueOf(element, @scope)
