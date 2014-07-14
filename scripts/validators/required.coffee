namespace('FormsJs.Validator')

class FormsJs.Validator.Required

  FILLED_STRING_REGEXP = /\S/

  constructor: (@options) ->

  isValid: (value) ->
    !@isEmpty(value)

  isEmpty: (value) ->
    switch typeof(value)
      when 'number', 'boolean' then false
      when 'string' then @isEmptyString(value)
      when 'object' then @isEmptyObject(value)
      else true

  isEmptyString: (value) ->
    !value.match(FILLED_STRING_REGEXP)

  isEmptyObject: (value) ->
    value.length == 0
