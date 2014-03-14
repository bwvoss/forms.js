(function() {
  namespace('Form');

  Form.Populator = (function() {
    function Populator() {}

    Populator.populate = function(elementData) {
      var fieldName;
      fieldName = elementData.name;
      return $("[name=" + fieldName + "]").val(elementData.value);
    };

    return Populator;

  })();

}).call(this);
