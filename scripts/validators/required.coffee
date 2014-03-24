namespace('Form.Validator')

class Form.Validator.Required

  isValid: (value) ->
    if value is '' or value is undefined
      false
    else
      true


