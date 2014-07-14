(function() {
  namespace('FormsJs.Validator');

  FormsJs.Validator.Required = (function() {
    var FILLED_STRING_REGEXP;

    FILLED_STRING_REGEXP = /\S/;

    function Required(options) {
      this.options = options;
    }

    Required.prototype.isValid = function(value) {
      return !this.isEmpty(value);
    };

    Required.prototype.isEmpty = function(value) {
      switch (typeof value) {
        case 'number':
        case 'boolean':
          return false;
        case 'string':
          return this.isEmptyString(value);
        case 'object':
          return this.isEmptyObject(value);
        default:
          return true;
      }
    };

    Required.prototype.isEmptyString = function(value) {
      return !value.match(FILLED_STRING_REGEXP);
    };

    Required.prototype.isEmptyObject = function(value) {
      return value.length === 0;
    };

    return Required;

  })();

}).call(this);
