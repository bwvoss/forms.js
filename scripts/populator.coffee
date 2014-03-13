namespace('Form')

class Form.Populator

  @populate: (elementData) ->
    fieldName = elementData.name
    $("[name=#{fieldName}]").val(elementData.value)
