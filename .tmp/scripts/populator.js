(function() {
  namespace('FormsJs');

  FormsJs.Populator = (function() {
    function Populator() {}

    Populator.populate = function(data, scope) {
      switch (data.type) {
        case FormsJs.InputTypes.RADIO:
          return FormsJs.Scope.setRadioChecked(data, scope);
        case FormsJs.InputTypes.CHECKBOX:
          return FormsJs.Scope.setAllChecked(data, scope);
        default:
          return FormsJs.Scope.setValue(data, scope);
      }
    };

    return Populator;

  })();

}).call(this);
