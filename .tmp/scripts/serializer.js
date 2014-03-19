(function() {
  namespace('Form');

  Form.Serializer = (function() {
    var formData, getCheckedValues, getRadioValue, setNameValue;

    function Serializer() {}

    formData = {};

    getRadioValue = function(checked, name, value) {
      if (checked) {
        return value = value;
      } else {
        return value = formData[name] || '';
      }
    };

    getCheckedValues = function(checked, name, value) {
      var checkboxValue;
      if (checked) {
        if (formData[name]) {
          checkboxValue = formData[name];
        } else {
          checkboxValue = [];
        }
        checkboxValue.push(value);
        return value = checkboxValue;
      } else {
        return value = formData[name] || '';
      }
    };

    setNameValue = function() {
      var name, type, value;
      type = $(this).attr('type');
      name = $(this).attr('name');
      value = $(this).val();
      if (type === 'radio') {
        value = getRadioValue(this.checked, name, value);
      }
      if (type === 'checkbox') {
        value = getCheckedValues(this.checked, name, value);
      }
      return formData[name] = value;
    };

    Serializer.serialize = function() {
      formData = {};
      $('form *').filter(':input').each(setNameValue);
      return JSON.stringify(formData);
    };

    return Serializer;

  })();

}).call(this);
