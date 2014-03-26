(function() {
  namespace('FormsJs.Form');

  FormsJs.Form.Values = (function() {
    function Values() {}

    Values.DEFAULTVALUE = '';

    Values.textValue = function(name) {
      return $("[name='" + name + "']").val();
    };

    Values.checkedValue = function(name) {
      return $("[name='" + name + "']:checked").val();
    };

    Values.checkedValues = function(name) {
      return $("[name='" + name + "']:checked").map(function() {
        return this.value;
      }).get();
    };

    Values.get = function(data) {
      var value;
      switch (data.type) {
        case FormsJs.Form.InputTypes.TEXT:
          value = this.textValue(data.name);
          break;
        case FormsJs.Form.InputTypes.SELECT:
          value = this.textValue(data.name);
          break;
        case FormsJs.Form.InputTypes.RADIO:
          value = this.checkedValue(data.name);
          break;
        case FormsJs.Form.InputTypes.CHECKBOX:
          value = this.checkedValues(data.name);
      }
      return value = value || this.DEFAULTVALUE;
    };

    return Values;

  })();

}).call(this);
