(function() {
  namespace('FormsJs.Form');

  FormsJs.Form.Clear = (function() {
    function Clear() {}

    Clear.all = function() {
      return $('form *').filter(':input').each(this.clearValue);
    };

    Clear.clearValue = function() {
      if (this.type === 'radio' || this.type === 'checkbox') {
        return $(this).prop('checked', false);
      } else {
        return $(this).val('');
      }
    };

    return Clear;

  })();

}).call(this);
