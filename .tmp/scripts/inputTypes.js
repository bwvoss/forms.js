(function() {
  namespace('FormsJs.Form');

  FormsJs.Form.InputTypes = (function() {
    function InputTypes() {}

    InputTypes.TEXT = 'text';

    InputTypes.RADIO = 'radio';

    InputTypes.CHECKBOX = 'checkbox';

    InputTypes.SELECT = 'select';

    InputTypes.PASSWORD = 'password';

    return InputTypes;

  })();

}).call(this);
