namespace('FormsJs.Form')

class FormsJs.Form.Clear

  @clearValue: ->
    $(this).val('')
    $(this).prop('checked', false)

  @all: ->
    $('form *').filter(':input').each(@clearValue)
