namespace('FormsJs.Form.Validator')

class FormsJs.Form.Validator.Factory

  build: (validation) ->
    switch validation.type
      when 'required' then new FormsJs.Form.Validator.Required(validation)
      when 'email' then new FormsJs.Form.Validator.Email(validation)
      when 'maxLength' then new FormsJs.Form.Validator.MaxLength(validation)
      when 'minLength' then new FormsJs.Form.Validator.MinLength(validation)
      when 'regExp' then new FormsJs.Form.Validator.RegExp(validation)
      else new FormsJs.Form.Validator.Custom(validation)
