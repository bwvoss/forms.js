namespace('FormsJs.Form.Validator')

class FormsJs.Form.Validator.MaxLength

  DEFAULTLENGTH: 1000000

  constructor: (@options) ->

  isValid: (value) ->
    length = @options.length or @DEFAULTLENGTH
    value.length <= length
