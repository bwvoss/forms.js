(function() {
  namespace('FormsJs');

  FormsJs.Clear = (function() {
    function Clear() {}

    Clear.valueOf = function(element) {
      if (element.type === 'radio' || element.type === 'checkbox') {
        return $("[name=" + element.name + "]").prop('checked', false);
      } else {
        return $("[name=" + element.name + "]").val('');
      }
    };

    return Clear;

  })();

}).call(this);
