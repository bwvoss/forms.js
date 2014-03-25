(function() {
  namespace('FormsJs');

  FormsJs.Form = (function() {
    function Form(data) {
      this.data = data;
      this.data;
    }

    Form.prototype.populate = function() {
      return _.all(this.data, function(element) {
        return FormsJs.Form.Populator.populate(element);
      });
    };

    Form.prototype.validate = function() {
      return _.all(this.data, function(element) {
        return FormsJs.Form.Validator.isValid(element);
      });
    };

    Form.prototype.serialize = function() {
      var formData;
      formData = {};
      _.each(this.data, function(element) {
        return _.extend(formData, FormsJs.Form.Serializer.serialize(element));
      });
      return formData;
    };

    return Form;

  })();

}).call(this);
