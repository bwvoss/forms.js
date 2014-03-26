namespace('FormsJs.Form.Validators')

class FormsJs.Form.Validator.CustomMatcher

  constructor: (@options) ->
    @options

  isValid: (value) ->
    @options.matcher(value)
