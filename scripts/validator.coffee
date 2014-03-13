namespace('Form')

class Form.Validator

  @isValid: (data) ->
    validations = data.validations
    value = $("[name=#{data.name}]").val()
    validationFactory = new Form.Validator.Factory

    _.all validations, (validation) =>
      (validationFactory.build(validation.type)).isValid(value, validation.length)


