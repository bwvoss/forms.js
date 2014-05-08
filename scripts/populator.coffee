namespace('FormsJs')

class FormsJs.Populator

  @populate: (data, scope) ->
    switch data.type
      when FormsJs.InputTypes.RADIO then FormsJs.Scope.setRadioChecked(data, scope)
      when FormsJs.InputTypes.CHECKBOX then FormsJs.Scope.setAllChecked(data, scope)
      else FormsJs.Scope.setValue(data, scope)
