namespace('Form.Validator')

class Form.Validator.MaxLength

  isValid: (value, maxChars) ->
    if value.length <= maxChars
      true
    else
      false
