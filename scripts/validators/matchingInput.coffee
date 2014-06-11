namespace('FormsJs.Validator')

class FormsJs.Validator.MatchingInput

  constructor: (@options) ->

  isValid: (value, scope) ->
    matchField = { elementSelector: @options.matchField }
    fieldValue = FormsJs.Scope.getValue(matchField, scope) || value
    fieldValue == value
