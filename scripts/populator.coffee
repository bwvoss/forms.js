# namespace('Forms.Populator')

# class Forms.Populator

@populate = (elementData) ->
  fieldName = elementData.name
  $("[name=#{fieldName}]").val(elementData.value)


