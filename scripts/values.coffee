namespace('FormsJs.Form')

class FormsJs.Form.Values

  @DEFAULTVALUE: ''

  @textValue: (name) ->
    $("[name='#{name}']").val()

  @checkedValue: (name) ->
    $("[name='#{name}']:checked").val()

  @checkedValues: (name) ->
    $("[name='#{name}']:checked").map( -> this.value ).get()

  @get: (data) ->
    switch data.type
      when FormsJs.Form.InputTypes.TEXT then value = @textValue(data.name)
      when FormsJs.Form.InputTypes.SELECT then value = @textValue(data.name)
      when FormsJs.Form.InputTypes.RADIO then value = @checkedValue(data.name)
      when FormsJs.Form.InputTypes.CHECKBOX then value = @checkedValues(data.name)
      when FormsJs.Form.InputTypes.PASSWORD then value = @textValue(data.name)

    value = value || @DEFAULTVALUE
