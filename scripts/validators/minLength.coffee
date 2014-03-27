namespace('FormsJs.Form.Validator')

class FormsJs.Form.Validator.MinLength

  DEFAULTLENGTH: 1

  constructor: (@options) ->

  isValid: (value) ->
    length = @options.length or @DEFAULTLENGTH
    value.length >= length or value is ''
