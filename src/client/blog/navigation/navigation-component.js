angular.module('blog.navigation', [
  'blog.navigation.template'
]).directive('blogNavigation', function(){
  return {
    restrict: 'E',
    scope: {},
    templateUrl: 'blog/navigation'
  };
});
