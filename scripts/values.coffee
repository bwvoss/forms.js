namespace('FormsJs.Form')

class FormsJs.Values

  @DEFAULTVALUE: ''

  @get: (data) ->
    switch data.type
      when FormsJs.InputTypes.TEXT then value = @textValue(data.name)
      when FormsJs.InputTypes.SELECT then value = @textValue(data.name)
      when FormsJs.InputTypes.RADIO then value = @radioValue(data.name)
      when FormsJs.InputTypes.CHECKBOX then value = @checkedValues(data.name)
      when FormsJs.InputTypes.PASSWORD then value = @textValue(data.name)

    value = value || @DEFAULTVALUE

  @textValue: (name) ->
    $("[name='#{name}']").val()

  @radioValue: (name) ->
    $("[name='#{name}']:checked").val()

  @checkedValues: (name) ->
    $("[name='#{name}']:checked").map( -> this.value ).get()
