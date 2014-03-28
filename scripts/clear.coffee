namespace('FormsJs.Form')

class FormsJs.Form.Clear

  @all: ->
    $('form *').filter(':input').each(@clearValue)

  @clearValue: ->
    if this.type is 'radio' or this.type is 'checkbox'
      $(this).prop('checked', false)
    else
      $(this).val('')

