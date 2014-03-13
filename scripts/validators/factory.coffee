namespace('Form.Validator')

class Form.Validator.Factory

  build: (validation) ->
    switch validation
      when 'required' then new Form.Validator.Required
      when 'email' then new Form.Validator.Email
      when 'maxLength' then new Form.Validator.MaxLength
      when 'minLength' then new Form.Validator.MinLength
