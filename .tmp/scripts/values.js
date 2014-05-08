(function() {
  namespace('FormsJs.Form');

  FormsJs.Values = (function() {
    var DEFAULT_VALUE;

    function Values() {}

    DEFAULT_VALUE = '';

    Values.get = function(data, scope) {
      var value;
      switch (data.type) {
        case FormsJs.InputTypes.RADIO:
          value = FormsJs.Scope.getCheckedRadioValue(data, scope);
          break;
        case FormsJs.InputTypes.CHECKBOX:
          value = FormsJs.Scope.getCheckedValues(data, scope);
          break;
        default:
          value = FormsJs.Scope.getValue(data, scope);
      }
      return value != null ? value : value = DEFAULT_VALUE;
    };

    return Values;

  })();

}).call(this);
