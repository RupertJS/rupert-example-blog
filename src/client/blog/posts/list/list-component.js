BlogPostsListComponent.directive = 'blogPostsList';
function BlogPostsListComponent(){
  this.templateUrl = 'blog/posts/list';
  this.scope = {
    posts: '='
  };
}

blogPostsListPage.$inject = ['$routeProvider'];
function blogPostsListPage($routeProvider){
  $routeProvider.when('/posts/list', {
    template: '<blog-posts-list posts="posts" />',
    controller: ['$scope', 'Posts', function($, Posts){
      $.posts = Posts.query();
    }]
  });
}

angular.module('blog.posts.list', [
  'ngRoute',
  'blog.posts.service',
  'blog.posts.list.template'
])
.component(BlogPostsListComponent)
.config(blogPostsListPage)
;
