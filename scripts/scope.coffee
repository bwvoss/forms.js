namespace('FormsJs')

class FormsJs.Scope

  DEFAULT_SCOPE = $(document)

  @set: (scope) ->
    @scope = scope

  @get: ->
    @scope ?= DEFAULT_SCOPE

  @setValue: (data) ->
    $("[name=#{data.name}]", @get()).val(data.value)

  @setRadioChecked = (data) ->
    $("[name='#{data.name}'][value='#{data.value}']", @get()).prop('checked', true)

  @setAllChecked = (data) ->
    if _.isArray(data.value)
      value = data.value
    else
      value = [data.value]
    $("[name='#{data.name}']", @get()).val(value)

  @getValue: (data) ->
    $("[name=#{data.name}]", @get()).val()

  @getCheckedRadioValue: (data) ->
    $("[name=#{data.name}]:checked", @get()).val()

  @getCheckedValues: (data) ->
    $("[name=#{data.name}]:checked", @get()).map( -> this.value ).get()

  @clearValue: (data) ->
    $("[name=#{data.name}]", @get()).val('')

  @clearChecked: (data) ->
    $("[name='#{data.name}']", @get()).prop('checked', false)
