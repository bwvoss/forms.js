@bindValidations = (form) ->
  $('[name="' + form.name + '"]').bind('change', form, isValid)

@isValid = (form) ->
  console.log(form.data.validations[0])
