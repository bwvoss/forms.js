namespace('FormsJs')

class FormsJs.Scope

  @setValue: (data, scope) ->
    $("[name=#{data.name}]", scope).val(data.value)

  @setRadioChecked = (data, scope) ->
    $("[name='#{data.name}'][value='#{data.value}']", scope).prop('checked', true)

  @setAllChecked = (data, scope) ->
    if _.isArray(data.value)
      value = data.value
    else
      value = [data.value]
    $("[name='#{data.name}']", scope).val(value)

  @getValue: (data, scope) ->
    $("[name=#{data.name}]", scope).val()

  @getCheckedRadioValue: (data, scope) ->
    $("[name=#{data.name}]:checked", scope).val()

  @getCheckedValues: (data, scope) ->
    $("[name=#{data.name}]:checked", scope).map( -> this.value ).get()

  @clearValue: (data, scope) ->
    $("[name=#{data.name}]", scope).val('')

  @clearChecked: (data, scope) ->
    $("[name='#{data.name}']", scope).prop('checked', false)
