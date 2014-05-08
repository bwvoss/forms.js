namespace('FormsJs.Validator')

class FormsJs.Validator.MatchingInput

  constructor: (@options) ->

  isValid: (value) ->
    matchField = @options.matchField
    fieldValue = $("[name=#{matchField}]").val() or value
    fieldValue is value
