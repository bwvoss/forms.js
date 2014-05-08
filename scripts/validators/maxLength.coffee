namespace('FormsJs.Validator')

class FormsJs.Validator.MaxLength

  DEFAULTLENGTH: 1000000

  constructor: (@options) ->

  isValid: (value) ->
    length = @options.length or @DEFAULTLENGTH
    value.length <= length
