(function() {
  namespace('FormsJs');

  FormsJs.Form = (function() {
    function Form(data) {
      this.data = data;
    }

    Form.prototype.populate = function() {
      return _.all(this.data, function(element) {
        return FormsJs.Form.Populator.populate(element);
      });
    };

    Form.prototype.isValid = function() {
      return _.all(this.data, function(element) {
        var value;
        value = FormsJs.Form.Values.get(element);
        return _.all(element.validations, function(validator) {
          return FormsJs.Form.Validator.isValid(validator, value);
        });
      });
    };

    Form.prototype.errors = function() {
      var errors;
      errors = [];
      _.each(this.data, function(element) {
        return errors.push.apply(errors, FormsJs.Form.Errors.get(element));
      });
      return errors;
    };

    Form.prototype.serialize = function() {
      var formData;
      formData = {};
      _.each(this.data, function(element) {
        return _.extend(formData, FormsJs.Form.Serializer.serialize(element));
      });
      return formData;
    };

    Form.prototype.clear = function() {
      return FormsJs.Form.Clear.all();
    };

    return Form;

  })();

}).call(this);
