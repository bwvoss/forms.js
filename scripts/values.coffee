namespace('FormsJs.Form')

class FormsJs.Values

  DEFAULT_VALUE = ''

  @get: (data, scope) ->
    switch data.type
      when FormsJs.InputTypes.RADIO then value = FormsJs.Scope.getCheckedRadioValue(data, scope)
      when FormsJs.InputTypes.CHECKBOX then value = FormsJs.Scope.getCheckedValues(data, scope)
      else value = FormsJs.Scope.getValue(data, scope)

    value ?= DEFAULT_VALUE

