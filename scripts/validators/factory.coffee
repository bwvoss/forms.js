namespace('FormsJs.Validator')

class FormsJs.Validator.Factory

  build: (validation) ->
    switch validation.type
      when 'required' then new FormsJs.Validator.Required(validation)
      when 'email' then new FormsJs.Validator.Email(validation)
      when 'maxLength' then new FormsJs.Validator.MaxLength(validation)
      when 'minLength' then new FormsJs.Validator.MinLength(validation)
      when 'regExp' then new FormsJs.Validator.RegExp(validation)
      when 'matchingInput' then new FormsJs.Validator.MatchingInput(validation)
      else new FormsJs.Validator.CustomMatcher(validation)
