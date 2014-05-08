namespace('FormsJs.Validator')

class FormsJs.Validator.CustomMatcher

  constructor: (@options) ->

  defaultMatcher: (value) -> true

  isValid: (value) ->
    matcher = @options.matcher or @defaultMatcher
    matcher(value)
