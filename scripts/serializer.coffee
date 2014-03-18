namespace('Form')

class Form.Serializer

  formData = {}

  getNameValue = ->
    name = $(this).attr('name')
    if $(this).attr('type') is 'radio'
      if this.checked
        value = $(this).attr('value')
    if $(this).attr('type') is 'text'
        value = $(this).attr('value')
    formData[name] = value

  @serialize: ->
    formData = {}
    $('form *').filter(':input').each(getNameValue)
    JSON.stringify(formData)

