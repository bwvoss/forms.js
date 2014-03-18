namespace('Form')

class Form.Validator

  allValidations = (validations, value, name, errorList) ->
    validationFactory = new Form.Validator.Factory
    _.all validations, (validation) =>
      if (validationFactory.build(validation.type)).isValid(value, validation.length)
        true
      else
        addToErrorList(errorList, name, validation.errorMessage)
        false

  addToErrorList = (errorList, name, message) ->
    error = { name: name, errorMessage: message }
    errorList.push error

  getValue = (data) ->
    switch data.type
      when "text" then value = $("[name=#{data.name}]").val()
      when "select" then value = $("[name=#{data.name}]").val()
      when "radio" then value = $("[name=#{data.name}]:checked").val()
      when "checkbox" then value = $("[name=#{data.name}]:checked").val()
    value

  @isValid: (data) ->
    errorList = []
    validations = data.validations
    value = getValue(data)
    if allValidations(validations, value, data.name, errorList)
      true
    else
      errorList

