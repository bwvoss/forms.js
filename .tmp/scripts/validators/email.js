(function() {
  namespace('FormsJs.Validator');

  FormsJs.Validator.Email = (function() {
    Email.prototype.EMAILREGEXP = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

    function Email(options) {
      this.options = options;
    }

    Email.prototype.isValid = function(value) {
      return this.EMAILREGEXP.test(value) || value === '';
    };

    return Email;

  })();

}).call(this);
