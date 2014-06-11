(function() {
  namespace('FormsJs');

  FormsJs.Populator = (function() {
    function Populator(data, scope) {
      if (scope == null) {
        scope = FormsJs.Defaults.SCOPE;
      }
      this.data = data;
      this.scope = scope;
    }

    Populator.prototype.populate = function() {
      return _.each(this.data, (function(_this) {
        return function(element) {
          switch (element.type) {
            case FormsJs.InputTypes.RADIO:
              return FormsJs.Scope.setRadioChecked(element, _this.scope);
            case FormsJs.InputTypes.CHECKBOX:
              return FormsJs.Scope.setAllChecked(element, _this.scope);
            default:
              return FormsJs.Scope.setValue(element, _this.scope);
          }
        };
      })(this));
    };

    Populator.prototype.clear = function() {
      return _.each(this.data, (function(_this) {
        return function(element) {
          return FormsJs.Clear.valueOf(element, _this.scope);
        };
      })(this));
    };

    return Populator;

  })();

}).call(this);
