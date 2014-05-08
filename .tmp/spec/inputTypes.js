(function() {
  describe('FormsJs.InputTypes', function() {
    it('returns text as a string for TEXT', function() {
      return expect(FormsJs.InputTypes.TEXT).toEqual('text');
    });
    it('returns radio as a string for RADIO', function() {
      return expect(FormsJs.InputTypes.RADIO).toEqual('radio');
    });
    it('returns checkbox as a string for CHECKBOX', function() {
      return expect(FormsJs.InputTypes.CHECKBOX).toEqual('checkbox');
    });
    return it('returns select as a string for SELECT', function() {
      return expect(FormsJs.InputTypes.SELECT).toEqual('select');
    });
  });

}).call(this);
