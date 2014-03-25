namespace('FormsJs.Form.Validator')

class FormsJs.Form.Validator.Email

  EMAILRE = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i

  isValid: (value) ->
    EMAILRE.test(value) or value is ''
