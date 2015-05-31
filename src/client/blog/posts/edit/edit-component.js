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

blogPostsEditPage.$inject = ['$routeProvider'];
function blogPostsEditPage($routeProvider){
  var blogPostsEditConfig = {
    template: '<blog-posts-edit post="post" />',
    controller: ['$scope', 'Posts', '$routeParams', function($, Posts, $r){
      if($r.postId){
        $.post = Posts.get({postId: $r.postId});
      } else {
        $.post = new Posts();
      }
    }]
  };
  $routeProvider.when('/posts/edit/:postId', blogPostsEditConfig);
  $routeProvider.when('/posts/new', blogPostsEditConfig);
}

angular.module('blog.posts.edit', [
  'ngRoute',
  'blog.posts.service',
  'blog.posts.edit.template'
])
.component(BlogPostsEditComponent)
.config(blogPostsEditPage)
;
