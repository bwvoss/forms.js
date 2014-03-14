(function() {
  this.bindValidations = function(form) {
    return $('[name="' + form.name + '"]').bind('change', form, isValid);
  };

  this.isValid = function(form) {
    return console.log(form.data.validations[0]);
  };

}).call(this);
