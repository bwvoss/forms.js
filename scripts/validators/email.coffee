namespace('Form.Validator')

class Form.Validator.Email

  EMAILRE = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i

  isValid: (value) ->
    if EMAILRE.test(value) || value is ''
      true
    else
      false
