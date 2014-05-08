(function() {
  namespace('FormsJs');

  FormsJs.Serializer = (function() {
    function Serializer() {}

    Serializer.serialize = function(element) {
      var formData, value;
      formData = {};
      value = FormsJs.Values.get(element);
      formData[element.name] = value;
      return formData;
    };

    return Serializer;

  })();

}).call(this);
