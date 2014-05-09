namespace('FormsJs.Form')

class FormsJs.Values

  @DEFAULTVALUE: ''

  @get: (data) ->
    switch data.type
      when FormsJs.InputTypes.RADIO then value = FormsJs.Scope.getCheckedRadioValue(data)
      when FormsJs.InputTypes.CHECKBOX then value = FormsJs.Scope.getCheckedValues(data)
      else value = FormsJs.Scope.getValue(data)

    value ?= @DEFAULTVALUE

