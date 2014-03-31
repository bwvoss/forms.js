namespace('FormsJs.Form.Validator')

class FormsJs.Form.Validator.Required

  constructor: (@options) ->

  isValid: (value) ->
    value isnt '' and value isnt undefined


