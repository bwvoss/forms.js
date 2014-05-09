(function() {
  namespace('FormsJs');

  FormsJs.Clear = (function() {
    function Clear() {}

    Clear.valueOf = function(element) {
      if (element.type === 'radio' || element.type === 'checkbox') {
        return FormsJs.Scope.clearChecked(element);
      } else {
        return FormsJs.Scope.clearValue(element);
      }
    };

    return Clear;

  })();

}).call(this);
