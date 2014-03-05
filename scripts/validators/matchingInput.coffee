namespace('FormsJs.Form.Validator')

class FormsJs.Form.Validator.MatchingInput

  constructor: (@options) ->

  isValid: (value) ->
    matchField = @options.matchField
    fieldValue = $("[name=#{matchField}]").val() or value
    fieldValue is value
