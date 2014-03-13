(function() {
  namespace('Form.Validator');

  Form.Validator.Email = (function() {
    var EMAILRE;

    function Email() {}

    EMAILRE = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

    Email.prototype.isValid = function(value) {
      if (EMAILRE.test(value) || value === '') {
        return true;
      } else {
        return false;
      }
    };

    return Email;

  })();

}).call(this);
