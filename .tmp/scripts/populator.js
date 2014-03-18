(function() {
  namespace('Form');

  Form.Populator = (function() {
    function Populator() {}

    Populator.populate = function(data) {
      var setChecked, setValue;
      setValue = function() {
        return $("[name=" + data.name + "]").val(data.value);
      };
      setChecked = function() {
        return $("[name=" + data.name + "][value='" + data.value + "']").prop('checked', true);
      };
      switch (data.type) {
        case 'text':
          return setValue();
        case 'radio':
          return setChecked();
        case 'checkbox':
          return setChecked();
        case 'select':
          return setValue();
      }
    };

    return Populator;

  })();

}).call(this);
