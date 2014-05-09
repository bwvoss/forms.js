namespace('FormsJs')

class FormsJs.Clear

  @valueOf: (element) ->
    if element.type is 'radio' or element.type is 'checkbox'
      FormsJs.Scope.clearChecked(element)
    else
      FormsJs.Scope.clearValue(element)

