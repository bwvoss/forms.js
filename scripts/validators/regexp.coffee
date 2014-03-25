namespace('FormsJs.Form.Validators')

class FormsJs.Form.Validator.RegExp

  constructor: (@options) ->
    @options

  isValid: (value) ->
    @options.pattern.test(value) or value is ''
