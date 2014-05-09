(function() {
  namespace('FormsJs.Form');

  FormsJs.Values = (function() {
    function Values() {}

    Values.DEFAULTVALUE = '';

    Values.get = function(data) {
      var value;
      switch (data.type) {
        case FormsJs.InputTypes.RADIO:
          value = FormsJs.Scope.getCheckedRadioValue(data);
          break;
        case FormsJs.InputTypes.CHECKBOX:
          value = FormsJs.Scope.getCheckedValues(data);
          break;
        default:
          value = FormsJs.Scope.getValue(data);
      }
      return value != null ? value : value = this.DEFAULTVALUE;
    };

    return Values;

  })();

}).call(this);
