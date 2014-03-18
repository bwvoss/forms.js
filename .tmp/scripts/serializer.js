(function() {
  namespace('Form');

  Form.Serializer = (function() {
    var formData, getNameValue;

    function Serializer() {}

    formData = {};

    getNameValue = function() {
      var name, value;
      name = $(this).attr('name');
      if ($(this).attr('type') === 'radio') {
        if (this.checked) {
          value = $(this).attr('value');
        }
      }
      if ($(this).attr('type') === 'text') {
        value = $(this).attr('value');
      }
      return formData[name] = value;
    };

    Serializer.serialize = function() {
      formData = {};
      $('form *').filter(':input').each(getNameValue);
      return JSON.stringify(formData);
    };

    return Serializer;

  })();

}).call(this);
