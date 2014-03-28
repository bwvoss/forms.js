(function() {
  namespace('FormsJs.Form');

  FormsJs.Form.Values = (function() {
    function Values() {}

    Values.DEFAULTVALUE = '';

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
          value = this.radioValue(data.name);
          break;
        case FormsJs.Form.InputTypes.CHECKBOX:
          value = this.checkedValues(data.name);
          break;
        case FormsJs.Form.InputTypes.PASSWORD:
          value = this.textValue(data.name);
      }
      return value = value || this.DEFAULTVALUE;
    };

    Values.textValue = function(name) {
      return $("[name='" + name + "']").val();
    };

    Values.radioValue = function(name) {
      return $("[name='" + name + "']:checked").val();
    };

    Values.checkedValues = function(name) {
      return $("[name='" + name + "']:checked").map(function() {
        return this.value;
      }).get();
    };

    return Values;

  })();

}).call(this);
