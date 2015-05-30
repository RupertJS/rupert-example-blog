function BlogPostsEditController(){}
BlogPostsEditController.prototype = Object.create({
  save: function(){
    return this.post.$save();
  }
});

BlogPostsEditComponent.directive = 'blogPostsEdit';
function BlogPostsEditComponent(){
  this.templateUrl = 'blog/posts/edit';
  this.controller = BlogPostsEditController;
  this.scope = {
    post: '='
  };
}

blogPostsNewPage.$inject = ['$stateProvider'];
function blogPostsNewPage($stateProvider){
  $stateProvider.state({
    name: 'posts.new',
    url: '/new',
    template: '<blog-posts-edit post="post" />',
    resolve: {
      post: ['Posts', function (Posts){
        return new Posts();
      }]
    },
    controller: ['$scope', 'post', function($, p){
      $.post = p;
    }]
  });
}

blogPostsEditPage.$inject = ['$stateProvider'];
function blogPostsEditPage($stateProvider){
  $stateProvider.state({
    name: 'posts.edit',
    url: '/edit/:postId',
    template: '<blog-posts-edit post="post" />',
    resolve: {
      postId: ['$stateParams', function($stateParams){
        return $stateParams.postId;
      }],
      post: ['Posts', function (Posts, postId){
        return Posts.get({postId: postId}).$promise;
      }]
    },
    controller: ['$scope', 'post', function($, p){
      $.post = p;
    }]
  });
}

angular.module('blog.posts.edit', [
  'ui.router',
  'blog.posts.service',
  'blog.posts.edit.template'
])
.component(BlogPostsEditComponent)
.config(blogPostsEditPage)
.config(blogPostsNewPage)
;
