namespace('FormsJs.Form')

class FormsJs.Form.Clear

  @clearValue: ->
    if this.type is 'text' or this.type is 'select'
      $(this).val('')
    else
      $(this).prop('checked', false)

  @all: ->
    $('form *').filter(':input').each(@clearValue)
