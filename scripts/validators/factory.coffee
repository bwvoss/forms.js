namespace('FormsJs.Form.Validator')

class FormsJs.Form.Validator.Factory

  build: (validation) ->
    switch validation
      when 'required' then new FormsJs.Form.Validator.Required
      when 'email' then new FormsJs.Form.Validator.Email
      when 'maxLength' then new FormsJs.Form.Validator.MaxLength
      when 'minLength' then new FormsJs.Form.Validator.MinLength
      when 'regExp' then new FormsJs.Form.Validator.RegExp
      else new FormsJs.Form.Validator.Custom
