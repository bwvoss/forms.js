namespace('FormsJs.Form.Validator')

class FormsJs.Form.Validator.MaxLength

  constructor: (@options) ->
    @options

  isValid: (value) ->
    value.length <= @options.length
