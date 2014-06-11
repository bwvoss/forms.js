(function() {
  namespace('FormsJs');

  FormsJs.Serializer = (function() {
    function Serializer() {}

    Serializer.serialize = function(element, scope) {
      var formData, key, value;
      formData = {};
      value = FormsJs.Values.get(element, scope);
      key = this.getKey(element);
      formData[key] = value;
      return formData;
    };

    Serializer.getKey = function(element) {
      if (element.dataKey) {
        return element.dataKey;
      } else {
        return element.name;
      }
    };

    return Serializer;

  })();

}).call(this);
