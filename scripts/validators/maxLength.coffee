namespace('FormsJs.Form.Validator')

class FormsJs.Form.Validator.MaxLength

  isValid: (value, maxChars) ->
    value.length <= maxChars
