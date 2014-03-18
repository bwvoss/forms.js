namespace('Form')

class Form.Serializer

  formData = {}

  getNameValue = ->
    formData["#{$(this).attr('name')}"] = $(this).attr('value')

  @serialize: ->
    $('input').each(getNameValue)
    JSON.stringify(formData)
