namespace('FormsJs.Form.Validator')

class FormsJs.Form.Validator.Required

  isValid: (value) ->
    value isnt '' and value isnt undefined


