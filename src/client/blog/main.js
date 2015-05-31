angular.module('blog', [
  'ngRoute',
  'blog.navigation',
  'blog.posts'
]).config(function($routeProvider){
  $routeProvider
    .otherwise({
      redirectTo: '/posts/list'
    })
    ;
});
