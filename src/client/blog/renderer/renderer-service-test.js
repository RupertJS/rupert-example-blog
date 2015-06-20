describe('Example Blog', function(){
  describe('Renderer Service', function(){
    beforeEach(module('renderer'));

    it('returns a markdown renderer', inject(function(renderer/*, $q*/){
      var source = '# Hello';
      var expected = '<h1>Hello</h1>';
      var actual = null;
      renderer(source).then(function(result){
        actual = result;
      });
      // $q.$flush();
      // TODO
      actual.should.equal(expected);
    }));
  });
});
