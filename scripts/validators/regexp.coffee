namespace('FormsJs.Form.Validators')

class FormsJs.Form.Validator.RegExp

  isValid: (value, length, regExp) ->
    regExp.test(value) or value is ''
