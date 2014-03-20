(function() {
  namespace('FormsJs.Form');

  FormsJs.Form.Serializer = (function() {
    function Serializer() {}

    Serializer.serialize = function(element) {
      var formData, value;
      formData = {};
      value = FormsJs.Form.Values.get(element);
      formData[element.name] = value;
      return JSON.stringify(formData);
    };

    return Serializer;

  })();

}).call(this);
