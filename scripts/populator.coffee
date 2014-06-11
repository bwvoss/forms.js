namespace('FormsJs')

class FormsJs.Populator

  constructor: (data, scope = FormsJs.Defaults.SCOPE) ->
    @data = data
    @scope = scope

  populate: ->
    _.each @data, (element) =>
      switch element.type
        when FormsJs.InputTypes.RADIO then FormsJs.Scope.setRadioChecked(element, @scope)
        when FormsJs.InputTypes.CHECKBOX then FormsJs.Scope.setAllChecked(element, @scope)
        else FormsJs.Scope.setValue(element, @scope)
