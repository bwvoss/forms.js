namespace('FormsJs.Form.Validator')

class FormsJs.Form.Validator.Required

  constructor: (@options) ->
    @options

  isValid: (value) ->
    value isnt '' and value isnt undefined


