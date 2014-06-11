namespace('FormsJs')

class FormsJs.Scope

  @setValue: (data, scope) ->
    $(data.elementSelector, scope).val(data.value) unless data.value == undefined

  @setRadioChecked = (data, scope) ->
    $("#{data.elementSelector}[value='#{data.value}']", scope).prop('checked', true)

  @setAllChecked = (data, scope) ->
    if _.isArray(data.value)
      value = data.value
    else
      value = [data.value]
    $(data.elementSelector, scope).val(value)

  @getValue: (data, scope) ->
    $(data.elementSelector, scope).val()

  @getName: (data, scope) ->
    $(data.elementSelector, scope).attr('name')

  @getCheckedRadioValue: (data, scope) ->
    $("#{data.elementSelector}:checked", scope).val()

  @getCheckedValues: (data, scope) ->
    $("#{data.elementSelector}:checked", scope).map( -> this.value ).get()

  @clearValue: (data, scope) ->
    $(data.elementSelector, scope).val('')

  @clearChecked: (data, scope) ->
    $(data.elementSelector, scope).prop('checked', false)
