(function() {
  namespace('Form');

  Form.Serializer = (function() {
    var formData, getNameValue;

    function Serializer() {}

    formData = {};

    getNameValue = function() {
      return formData["" + ($(this).attr('name'))] = $(this).attr('value');
    };

    Serializer.serialize = function() {
      $('input').each(getNameValue);
      return JSON.stringify(formData);
    };

    return Serializer;

  })();

}).call(this);
