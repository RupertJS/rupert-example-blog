BlogPostsViewController.$inject = [
  '$routeParams', 'Posts'
]
function BlogPostsViewController($r, Posts){
  this.post = Posts.get({postId: $r.postId});
}

blogPostsViewPage.$inject = ['$routeProvider'];
function blogPostsViewPage($routeProvider){
  $routeProvider.when('/posts/view/:postId', {
    templateUrl: 'blog/posts/view',
    controller: BlogPostsViewController,
    controllerAs: 'state'
  });
}

angular.module('blog.posts.view', [
  'ngRoute',
  'blog.posts.service',
  'blog.posts.view.template'
])
.config(blogPostsViewPage)
;
