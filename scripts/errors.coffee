namespace('Form')

class Form.Errors

  @apply: (data) ->
    $("span[name=#{data.name}]").text(data.errorMessage)
