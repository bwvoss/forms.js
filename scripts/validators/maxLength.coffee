namespace('FormsJs.Form.Validator')

class FormsJs.Form.Validator.MaxLength

  DEFAULTLENGTH = 4096

  constructor: (@options) ->

  isValid: (value) ->
    length = @options.length or @DEFAULTLENGTH
    value.length <= length
