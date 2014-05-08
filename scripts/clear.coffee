namespace('FormsJs')

class FormsJs.Clear

  @valueOf: (element, scope) ->
    if element.type is 'radio' or element.type is 'checkbox'
      FormsJs.Scope.clearChecked(element, scope)
    else
      FormsJs.Scope.clearValue(element, scope)

