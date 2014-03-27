namespace('FormsJs.Form.Validator')

class FormsJs.Form.Validator.RegExp

  DEFAULTREGEXP: /[^]+/

  constructor: (@options) ->

  isValid: (value) ->
    anything = /[^]+/
    pattern = @options.pattern or @DEFAULTREGEXP
    pattern.test(value) or value is ''
