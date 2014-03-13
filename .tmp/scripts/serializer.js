(function() {
  namespace('Form');

  Form.Serializer = (function() {
    function Serializer() {}

    Serializer.serialize = function(formData) {
      return $('form').serialize();
    };

    return Serializer;

  })();

}).call(this);
