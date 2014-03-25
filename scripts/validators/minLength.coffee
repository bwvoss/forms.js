namespace('FormsJs.Form.Validator')

class FormsJs.Form.Validator.MinLength

  isValid: (value, minChars) ->
    value.length >= minChars or value is ''
