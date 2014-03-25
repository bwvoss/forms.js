namespace('FormsJs.Form.Validator')

class FormsJs.Form.Validator.MinLength

  constructor: (@options) ->
    @options

  isValid: (value) ->
    value.length >= @options.length or value is ''
