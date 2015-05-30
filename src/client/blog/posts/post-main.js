angular.module('blog.posts', [
  'ui.router',
  'blog.posts.list'
]).config(function($stateProvider){
  $stateProvider.state("posts", {
    url: '/posts',
    abstract: true,
    template: '<ui-view />'
  });
})
