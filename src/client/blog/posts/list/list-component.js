BlogPostsListComponent.directive = 'blogPostsList';
function BlogPostsListComponent(){
  this.templateUrl = 'blog/posts/list';
  this.scope = {
    posts: '='
  };
}

blogPostsListPage.$inject = ['$stateProvider'];
function blogPostsListPage($stateProvider){
  $stateProvider.state({
    name: 'posts.list',
    url: '/list',
    template: '<blog-posts-list posts="posts" />',
    resolve: {
      posts: ['Posts', function (Posts){
        return Posts.query().$promise;
      }]
    },
    controller: ['$scope', 'posts', function($, p){
      $.posts = p;
    }]
  });
}

angular.module('blog.posts.list', [
  'ui.router',
  'blog.posts.service',
  'blog.posts.list.template'
])
.component(BlogPostsListComponent)
.config(blogPostsListPage)
;
