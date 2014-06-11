(function() {
  namespace('FormsJs');

  FormsJs.Serializer = (function() {
    function Serializer() {}

    Serializer.serialize = function(element, scope) {
      var formData, key, value;
      formData = {};
      value = FormsJs.Values.get(element, scope);
      key = this.getKey(element, scope);
      formData[key] = value;
      return formData;
    };

    Serializer.getKey = function(element, scope) {
      if (element.dataKey) {
        return element.dataKey;
      } else {
        return FormsJs.Scope.getName(element, scope);
      }
    };

    return Serializer;

  })();

}).call(this);
