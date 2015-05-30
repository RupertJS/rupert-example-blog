function BlogPostsViewController(){}
BlogPostsViewController.prototype = Object.create({
  save: function(){
    return this.post.$save();
  }
});

BlogPostsViewComponent.directive = 'blogPostsView';
function BlogPostsViewComponent(){
  this.templateUrl = 'blog/posts/view';
  this.controller = BlogPostsViewController;
  this.scope = {
    post: '='
  };
}

blogPostsViewPage.$inject = ['$stateProvider'];
function blogPostsViewPage($stateProvider){
  $stateProvider.state({
    name: 'posts.view',
    url: '/view/:postId',
    template: '<blog-posts-view post="post" />',
    resolve: {
      postId: ['$stateParams', function($stateParams){
        return $stateParams.postId;
      }],
      post: ['Posts', 'postId', function (Posts, postId){
        return Posts.get({postId: postId}).$promise;
      }]
    },
    controller: ['$scope', 'post', function($, p){
      $.post = p;
    }]
  });
}

angular.module('blog.posts.view', [
  'ui.router',
  'blog.posts.service',
  'blog.posts.view.template'
])
.component(BlogPostsViewComponent)
.config(blogPostsViewPage)
;
