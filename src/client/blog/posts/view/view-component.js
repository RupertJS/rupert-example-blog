BlogPostsViewComponent.directive = 'blogPostsView';
function BlogPostsViewComponent(){
  this.templateUrl = 'blog/posts/view';
  this.scope = {
    post: '='
  };
}

blogPostsViewPage.$inject = ['$routeProvider'];
function blogPostsViewPage($routeProvider){
  $routeProvider.when('/posts/view/:postId', {
    template: '<blog-posts-view post="post" />',
    controller: ['$scope', 'Posts', '$routeParams', function($, Posts, $r){
      $.post = Posts.get({postId: $r.postId});
    }]
  });
}

angular.module('blog.posts.view', [
  'ngRoute',
  'blog.posts.service',
  'blog.posts.view.template'
])
.component(BlogPostsViewComponent)
.config(blogPostsViewPage)
;
