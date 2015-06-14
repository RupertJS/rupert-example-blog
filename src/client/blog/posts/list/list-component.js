BlogPostsListController.$inject = ['Posts'];
function BlogPostsListController(Posts){
  this.posts = Posts.query();
}

blogPostsListPage.$inject = ['$routeProvider'];
function blogPostsListPage($routeProvider){
  $routeProvider.when('/posts/list', {
    templateUrl: 'blog/posts/list',
    controller: BlogPostsListController,
    controllerAs: 'state'
  });
  $routeProvider.otherwise({
    redirectTo: '/posts/list'
  });
}

angular.module('blog.posts.list', [
  'ngRoute',
  'blog.posts.service',
  'blog.posts.list.template'
])
.config(blogPostsListPage)
;
