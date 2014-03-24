namespace('FormsJs')

class FormsJs.Form

  clearValue = ->
    $(this).val('')
    $(this).prop('checked', false)

  @clear: ->
    $('form *').filter(':input').each(clearValue)
