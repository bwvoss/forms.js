(function() {
  namespace('FormsJs');

  FormsJs.Populator = (function() {
    function Populator() {}

    Populator.populate = function(data) {
      switch (data.type) {
        case FormsJs.InputTypes.RADIO:
          return this.setChecked(data);
        case FormsJs.InputTypes.CHECKBOX:
          return this.setAllChecked(data);
        default:
          return this.setValue(data);
      }
    };

    Populator.setValue = function(data) {
      return $("[name='" + data.name + "']").val(data.value);
    };

    Populator.setChecked = function(data) {
      return $("[name='" + data.name + "'][value='" + data.value + "']").prop('checked', true);
    };

    Populator.setAllChecked = function(data) {
      var value;
      if (_.isArray(data.value)) {
        value = data.value;
      } else {
        value = [data.value];
      }
      return $("[name='" + data.name + "']").val(value);
    };

    return Populator;

  })();

}).call(this);
