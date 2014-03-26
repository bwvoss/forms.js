namespace('FormsJs.Form.Validators')

class FormsJs.Form.Validator.CustomMatcher

  constructor: (@options) ->

  defaultMatcher: (value) -> true

  isValid: (value) ->
    matcher = @options.matcher or @defaultMatcher
    matcher(value)
