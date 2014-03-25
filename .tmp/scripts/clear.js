(function() {
  namespace('FormsJs.Form');

  FormsJs.Form.Clear = (function() {
    function Clear() {}

    Clear.clearValue = function() {
      $(this).val('');
      return $(this).prop('checked', false);
    };

    Clear.all = function() {
      return $('form *').filter(':input').each(this.clearValue);
    };

    return Clear;

  })();

}).call(this);
