namespace('FormsJs')

class FormsJs.Populator

  @populate: (data) ->
    switch data.type
      when FormsJs.InputTypes.RADIO then FormsJs.Scope.setRadioChecked(data)
      when FormsJs.InputTypes.CHECKBOX then FormsJs.Scope.setAllChecked(data)
      else FormsJs.Scope.setValue(data)
