namespace('Form.Validator')

class Form.Validator.Required

  isValid: (value) ->
    if value is ''
      false
    else
      true


