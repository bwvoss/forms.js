namespace('FormsJs')

class FormsJs.Form

  constructor: (@data) ->

  populate: ->
    _.each @data, (element) ->
      FormsJs.Populator.populate(element)

  isValid: ->
    _.all @data, (element) ->
      value = FormsJs.Values.get(element)
      _.all element.validations, (validator) ->
        FormsJs.Validator.isValid(validator, value)

  errors: ->
    _.reduce @data, (errors, element) ->
      _.extend(errors, FormsJs.Errors.get(element))
      errors
    , {}

  serialize: ->
    _.reduce @data, (formData, element) ->
      _.extend(formData, FormsJs.Serializer.serialize(element))
      formData
    , {}

  clear: ->
    _.each @data, (element) ->
      FormsJs.Clear.valueOf(element)
