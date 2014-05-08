(function() {
  namespace('FormsJs');

  FormsJs.Form = (function() {
    function Form(data) {
      this.data = data;
    }

    Form.prototype.populate = function() {
      return _.each(this.data, function(element) {
        return FormsJs.Populator.populate(element);
      });
    };

    Form.prototype.isValid = function() {
      return _.all(this.data, function(element) {
        var value;
        value = FormsJs.Values.get(element);
        return _.all(element.validations, function(validator) {
          return FormsJs.Validator.isValid(validator, value);
        });
      });
    };

    Form.prototype.errors = function() {
      return _.reduce(this.data, function(errors, element) {
        _.extend(errors, FormsJs.Errors.get(element));
        return errors;
      }, {});
    };

    Form.prototype.serialize = function() {
      return _.reduce(this.data, function(formData, element) {
        _.extend(formData, FormsJs.Serializer.serialize(element));
        return formData;
      }, {});
    };

    Form.prototype.clear = function() {
      return _.each(this.data, function(element) {
        return FormsJs.Clear.valueOf(element);
      });
    };

    return Form;

  })();

}).call(this);
