describe('Post View Component', function(){
  beforeEach(module('blog.posts.view'));

  it('renders a view of a post', function($httpBackend){
    var samplePost = {
      title: 'test',
      content: '# Post'
    };
    $httpBackend.expectGET('/api/v1/posts/123').respondWith(samplePost);
    var postView = renderRoute('/posts/view/123');
    postView.find('h2').text.should.equal('test');
  });
});
