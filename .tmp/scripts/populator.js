(function() {
  namespace('FormsJs.Form');

  FormsJs.Form.Populator = (function() {
    var setChecked, setValue;

    function Populator() {}

    setValue = function(data) {
      return $("[name=" + data.name + "]").val(data.value);
    };

    setChecked = function(data) {
      return $("[name=" + data.name + "][value='" + data.value + "']").prop('checked', true);
    };

    Populator.populate = function(data) {
      switch (data.type) {
        case FormsJs.Form.InputTypes.TEXT:
          return setValue(data);
        case FormsJs.Form.InputTypes.RADIO:
          return setChecked(data);
        case FormsJs.Form.InputTypes.CHECKBOX:
          return setChecked(data);
        case FormsJs.Form.InputTypes.SELECT:
          return setValue(data);
      }
    };

    return Populator;

  })();

}).call(this);
