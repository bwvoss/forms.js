(function() {
  namespace('FormsJs.Form');

  FormsJs.Form.Populator = (function() {
    var setAllChecked, setChecked, setValue;

    function Populator() {}

    setValue = function(data) {
      return $("[name='" + data.name + "']").val(data.value);
    };

    setChecked = function(data) {
      return $("[name='" + data.name + "'][value='" + data.value + "']").prop('checked', true);
    };

    setAllChecked = function(data) {
      var value;
      if (_.isArray(data.value)) {
        value = data.value;
      } else {
        value = [data.value];
      }
      return $("[name='" + data.name + "']").val(value);
    };

    Populator.populate = function(data) {
      switch (data.type) {
        case FormsJs.Form.InputTypes.TEXT:
          return setValue(data);
        case FormsJs.Form.InputTypes.RADIO:
          return setChecked(data);
        case FormsJs.Form.InputTypes.CHECKBOX:
          return setAllChecked(data);
        case FormsJs.Form.InputTypes.SELECT:
          return setValue(data);
        case FormsJs.Form.InputTypes.PASSWORD:
          return setValue(data);
        default:
          return setValue(data);
      }
    };

    return Populator;

  })();

}).call(this);
