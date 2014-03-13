namespace('Form.Validator')

class Form.Validator.MinLength

  isValid: (value, minChars) ->
    if value.length >= minChars
      true
    else
      false
