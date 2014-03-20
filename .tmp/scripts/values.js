(function() {
  namespace('FormsJs.Form');

  FormsJs.Form.Values = (function() {
    var checkedValue, checkedValues, textValue;

    function Values() {}

    Values.DEFAULTVALUE = '';

    textValue = function(name) {
      return $("[name='" + name + "']").val();
    };

    checkedValue = function(name) {
      return $("[name='" + name + "']:checked").val();
    };

    checkedValues = function(name) {
      return $("[name='" + name + "']:checked").map(function() {
        return this.value;
      }).get();
    };

    Values.get = function(data) {
      var value;
      switch (data.type) {
        case FormsJs.Form.InputTypes.TEXT:
          value = textValue(data.name);
          break;
        case FormsJs.Form.InputTypes.SELECT:
          value = textValue(data.name);
          break;
        case FormsJs.Form.InputTypes.RADIO:
          value = checkedValue(data.name);
          break;
        case FormsJs.Form.InputTypes.CHECKBOX:
          value = checkedValues(data.name);
      }
      return value = value || this.DEFAULTVALUE;
    };

    return Values;

  })();

}).call(this);
