(function() {
  namespace('FormsJs.Form.Validator');

  FormsJs.Form.Validator.Email = (function() {
    var EMAILRE;

    function Email(options) {
      this.options = options;
      this.options;
    }

    EMAILRE = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

    Email.prototype.isValid = function(value) {
      return EMAILRE.test(value) || value === '';
    };

    return Email;

  })();

}).call(this);
