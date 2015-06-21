describe('Post View Component', function(){
  beforeEach(module('blog.posts.view'));

  it('renders a view of a post', inject(function($httpBackend, $route){
    var samplePost = {
      title: 'test',
      content: '# Post'
    };
    $httpBackend.expectGET('/api/v1/posts/123').respond(samplePost);
    /*var postView = */renderRoute('/posts/view/123');
    $route.current.params.should.have.property('postId').that.equals('123');
    // TODO more assertions
  }));
});
