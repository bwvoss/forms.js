(function() {
  namespace('FormsJs');

  FormsJs.Form = (function() {
    var DEFAULT_SCOPE;

    DEFAULT_SCOPE = $(document);

    function Form(data, scope) {
      if (scope == null) {
        scope = DEFAULT_SCOPE;
      }
      this.data = data;
      this.scope = scope;
    }

    Form.prototype.populate = function() {
      return _.each(this.data, (function(_this) {
        return function(element) {
          return FormsJs.Populator.populate(element, _this.scope);
        };
      })(this));
    };

    Form.prototype.isValid = function() {
      return _.all(this.data, (function(_this) {
        return function(element) {
          var value;
          value = FormsJs.Values.get(element, _this.scope);
          return _.all(element.validations, function(validator) {
            return FormsJs.Validator.isValid(validator, value, _this.scope);
          });
        };
      })(this));
    };

    Form.prototype.errors = function() {
      return _.reduce(this.data, (function(_this) {
        return function(errors, element) {
          _.extend(errors, FormsJs.Errors.get(element, _this.scope));
          return errors;
        };
      })(this), {});
    };

    Form.prototype.serialize = function() {
      return _.reduce(this.data, (function(_this) {
        return function(formData, element) {
          _.extend(formData, FormsJs.Serializer.serialize(element, _this.scope));
          return formData;
        };
      })(this), {});
    };

    Form.prototype.clear = function() {
      return _.each(this.data, (function(_this) {
        return function(element) {
          return FormsJs.Clear.valueOf(element, _this.scope);
        };
      })(this));
    };

    return Form;

  })();

}).call(this);
