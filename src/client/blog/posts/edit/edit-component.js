BlogPostsEditController.$inject = ['$routeParams', 'Posts'];
function BlogPostsEditController($r, Posts){
  this.post = $r.postId ?
    Posts.get({postId: $r.postId}) :
    new Posts();
}
BlogPostsEditController.prototype = Object.create({
  save: function(){
    return this.post.$save();
  }
});

blogPostsEditPage.$inject = ['$routeProvider'];
function blogPostsEditPage($routeProvider){
  var blogPostsEditConfig = {
    templateUrl: 'blog/posts/edit',
    controller: BlogPostsEditController,
    controllerAs: 'state'
  };
  $routeProvider.when('/posts/edit/:postId', blogPostsEditConfig);
  $routeProvider.when('/posts/new', blogPostsEditConfig);
}

angular.module('blog.posts.edit', [
  'ngRoute',
  'ngMessages',
  'blog.posts.service',
  'blog.posts.edit.template'
])
.config(blogPostsEditPage)
;
