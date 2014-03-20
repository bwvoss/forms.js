(function() {
  namespace('FormsJs');

  FormsJs.Form = (function() {
    var clearValue;

    function Form() {}

    clearValue = function() {
      $(this).val('');
      return $(this).prop('checked', false);
    };

    Form.clear = function() {
      return $('form *').filter(':input').each(clearValue);
    };

    return Form;

  })();

}).call(this);
