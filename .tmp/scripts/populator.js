(function() {
  namespace('FormsJs');

  FormsJs.Populator = (function() {
    function Populator() {}

    Populator.populate = function(data) {
      switch (data.type) {
        case FormsJs.InputTypes.RADIO:
          return FormsJs.Scope.setRadioChecked(data);
        case FormsJs.InputTypes.CHECKBOX:
          return FormsJs.Scope.setAllChecked(data);
        default:
          return FormsJs.Scope.setValue(data);
      }
    };

    return Populator;

  })();

}).call(this);
