namespace('Form')

class Form.Serializer

  @serialize: (formData) ->
    $('form').serialize()
