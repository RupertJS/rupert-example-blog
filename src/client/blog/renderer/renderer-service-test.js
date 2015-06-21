describe('Example Blog', function(){
  describe('Renderer Service', function(){
    beforeEach(module('renderer'));

    var _oldMarked = null;
    beforeEach(inject(function($q){
      _oldMarked = marked;
      marked = sinon.stub().returns($q.when('<h1>Hello</h1>'));
      marked.setOptions = sinon.spy();
    }));
    afterEach(function(){
      marked = _oldMarked;
      _oldMarked = null;
    });

    it('returns a markdown renderer', inject(function(renderer, $rootScope){
      var source = '# Hello';
      var expected = '<h1>Hello</h1>';
      var actual = null;
      renderer(source).then(function(result){
        actual = result;
      });
      $rootScope.$digest();
      marked.should.have.been.calledWith(source);
      actual.should.equal(expected);
    }));
  });
});
