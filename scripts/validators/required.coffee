namespace('FormsJs.Validator')

class FormsJs.Validator.Required

  constructor: (@options) ->

  isValid: (value) ->
    value isnt '' and value isnt undefined


