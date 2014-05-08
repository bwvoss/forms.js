(function() {
  namespace('FormsJs');

  FormsJs.Clear = (function() {
    function Clear() {}

    Clear.valueOf = function(element, scope) {
      if (element.type === 'radio' || element.type === 'checkbox') {
        return FormsJs.Scope.clearChecked(element, scope);
      } else {
        return FormsJs.Scope.clearValue(element, scope);
      }
    };

    return Clear;

  })();

}).call(this);
