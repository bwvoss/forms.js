namespace('FormsJs')

class FormsJs.Populator

  setValue = (data) ->
    $("[name='#{data.name}']").val(data.value)

  setChecked = (data) ->
    $("[name='#{data.name}'][value='#{data.value}']").prop('checked', true)

  setAllChecked = (data) ->
    if _.isArray(data.value)
      value = data.value
    else
      value = [data.value]
    $("[name='#{data.name}']").val(value)

  @populate: (data) ->
    switch data.type
      when FormsJs.InputTypes.TEXT then setValue(data)
      when FormsJs.InputTypes.RADIO then setChecked(data)
      when FormsJs.InputTypes.CHECKBOX then setAllChecked(data)
      when FormsJs.InputTypes.SELECT then setValue(data)
      when FormsJs.InputTypes.PASSWORD then setValue(data)
      else setValue(data)
