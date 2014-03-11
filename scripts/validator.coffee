# namespace('Forms.Validator')

# class Forms.Validator

@isValid = (elementData) ->
  validationTest = elementData.validations[0]
  elementValue = $("[name=" + elementData.name + "]").val()
  EMAILRE = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i

  if validationTest is 'email'
    if EMAILRE.test(elementValue)
      valid = true
    else
      valid = false

  if validationTest is 'required'
    if elementValue is ''
      valid = false
    else
      valid = true

  valid
