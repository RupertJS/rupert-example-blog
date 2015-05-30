angular.module('blog', [
  'ui.router',
  'blog.navigation',
  'blog.posts'
]).config(function($urlRouterProvider){
  $urlRouterProvider
    .when('', '/posts/list')
    .when('/', '/posts/list')
    ;
});
