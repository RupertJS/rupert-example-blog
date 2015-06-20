describe('Posts Service', function(){
  beforeEach(module('blog.posts.service'));

  it('creates a reasonable $resource', inject(function(Posts, $httpBackend){
    $httpBackend.expectGET('/api/v1/posts/123').respond({title: 'Test Post'});
    Posts.get({postId: '123'});
  }));
});
