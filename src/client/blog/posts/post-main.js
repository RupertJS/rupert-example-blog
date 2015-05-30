angular.module('blog.posts', [
  'ui.router',
  'blog.posts.list',
  'blog.posts.edit'
]).config(function($stateProvider){
  $stateProvider.state("posts", {
    url: '/posts',
    abstract: true,
    template: '<ui-view />'
  });
})
