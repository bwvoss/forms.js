namespace('FormsJs')

class FormsJs.Form

  constructor: (@data) ->

  populate: ->
    _.each @data, (element) ->
      FormsJs.Form.Populator.populate(element)

  isValid: ->
    _.all @data, (element) ->
      value = FormsJs.Form.Values.get(element)
      _.all element.validations, (validator) ->
        FormsJs.Form.Validator.isValid(validator, value)

  errors: ->
    _.reduce @data, (errors, element) ->
      _.extend(errors, FormsJs.Form.Errors.get(element))
      errors
    , {}

  serialize: ->
    _.reduce @data, (formData, element) ->
      _.extend(formData, FormsJs.Form.Serializer.serialize(element))
      formData
    , {}

  clear: ->
    FormsJs.Form.Clear.all()
