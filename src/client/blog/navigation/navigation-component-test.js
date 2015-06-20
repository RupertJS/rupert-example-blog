describe('Navigation Component', function(){
  beforeEach(module('blog.navigation'));

  it('renders as an element', function(){
    var element = renderElement('blog-navigation');
    element.find('li').length.should.equal(2);
  });
});
