(function() {
  namespace('FormsJs');

  FormsJs.Populator = (function() {
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
        case FormsJs.InputTypes.TEXT:
          return setValue(data);
        case FormsJs.InputTypes.RADIO:
          return setChecked(data);
        case FormsJs.InputTypes.CHECKBOX:
          return setAllChecked(data);
        case FormsJs.InputTypes.SELECT:
          return setValue(data);
        case FormsJs.InputTypes.PASSWORD:
          return setValue(data);
        default:
          return setValue(data);
      }
    };

    return Populator;

  })();

}).call(this);
