namespace('FormsJs.Form.Validators')

class FormsJs.Form.Validator.Custom

  isValid: (value, length, regEx) ->
    regEx = new RegExp(regEx)
    regEx.test(value) or value is ''
