namespace('Form')

class Form.Populator

  @populate: (data) ->

    setValue = ->
      $("[name=#{data.name}]").val(data.value)

    setChecked = ->
      $("[name=#{data.name}][value='#{data.value}']").prop('checked', true)

    switch data.type
      when 'text' then setValue()
      when 'radio' then setChecked()
      when 'checkbox' then setChecked()
      when 'select' then setValue()
