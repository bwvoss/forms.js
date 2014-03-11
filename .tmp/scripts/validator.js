(function() {
  this.isValid = function(elementData) {
    var EMAILRE, elementValue, valid, validationTest;
    validationTest = elementData.validations[0];
    elementValue = $("[name=" + elementData.name + "]").val();
    EMAILRE = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    if (validationTest === 'email') {
      if (EMAILRE.test(elementValue)) {
        valid = true;
      } else {
        valid = false;
      }
    }
    if (validationTest === 'required') {
      if (elementValue === '') {
        valid = false;
      } else {
        valid = true;
      }
    }
    return valid;
  };

}).call(this);
