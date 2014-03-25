namespace('FormsJs')

class FormsJs.Form

  constructor: (@data) ->
    @data

  populate: ->
    _.all @data, (element) ->
      FormsJs.Form.Populator.populate(element)

  isValid: ->
    _.all @data, (element) ->
      FormsJs.Form.Validator.isValid(element)

  serialize: ->
    formData = {}
    _.each @data, (element) ->
      _.extend(formData, FormsJs.Form.Serializer.serialize(element))
    formData

  clear: ->
    FormsJs.Form.Clear.all()
