namespace('FormsJs')

class FormsJs.Clear

  @valueOf: (element) ->
    if element.type is 'radio' or element.type is 'checkbox'
      $("[name=#{element.name}]").prop('checked', false)
    else
      $("[name=#{element.name}]").val('')

