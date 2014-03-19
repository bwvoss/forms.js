namespace('Form')

class Form.Serializer

  formData = {}

  getRadioValue = (checked, name, value) ->
    if checked
      value = value
    else
      value = formData[name] || ''

  getCheckedValues = (checked, name, value) ->
    if checked
      if formData[name]
        checkboxValue = formData[name]
      else
        checkboxValue = []
      checkboxValue.push value
      value = checkboxValue
    else
      value = formData[name] || ''

  setNameValue = ->
    type = $(this).attr('type')
    name = $(this).attr('name')
    value = $(this).val()

    if type is 'radio'
      value = getRadioValue(this.checked, name, value)

    if type is 'checkbox'
      value = getCheckedValues(this.checked, name, value)

    formData[name] = value

  @serialize: ->
    formData = {}
    $('form *').filter(':input').each(setNameValue)
    JSON.stringify(formData)

