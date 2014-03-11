(function() {
  this.populate = function(elementData) {
    var fieldName;
    fieldName = elementData.name;
    return $("[name=" + fieldName + "]").val(elementData.value);
  };

}).call(this);
