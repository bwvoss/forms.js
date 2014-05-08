(function() {
  namespace('FormsJs');

  FormsJs.Serializer = (function() {
    function Serializer() {}

    Serializer.serialize = function(element, scope) {
      var formData, value;
      formData = {};
      value = FormsJs.Values.get(element, scope);
      formData[element.name] = value;
      return formData;
    };

    return Serializer;

  })();

}).call(this);
