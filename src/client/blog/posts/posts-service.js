BlogPostsFactory.$inject = ['$resource'];
function BlogPostsFactory($resource){
  return $resource('/api/v1/posts/:postId');
}

angular.module('blog.posts.service', [
  'ngResource'
]).factory('Posts', BlogPostsFactory);
