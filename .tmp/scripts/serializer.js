(function() {
  namespace('FormsJs');

  FormsJs.Serializer = (function() {
    function Serializer(data, scope) {
      if (scope == null) {
        scope = FormsJs.Defaults.SCOPE;
      }
      this.data = data;
      this.scope = scope;
    }

    Serializer.prototype.serialize = function() {
      return _.reduce(this.data, (function(_this) {
        return function(formData, element) {
          _.extend(formData, _this.getFormData(element));
          return formData;
        };
      })(this), {});
    };

    Serializer.prototype.getFormData = function(element) {
      var formData, key, value;
      formData = {};
      value = FormsJs.Values.get(element, this.scope);
      key = this.getKey(element);
      formData[key] = value;
      return formData;
    };

    Serializer.prototype.getKey = function(element) {
      if (element.dataKey) {
        return element.dataKey;
      } else {
        return FormsJs.Scope.getName(element, this.scope);
      }
    };

    return Serializer;

  })();

}).call(this);
