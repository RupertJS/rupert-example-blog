angular.module('render.directive', [
  'renderer'
]).directive('render', ['renderer', function(render){
  return {
    restrict: 'E',
    replace: false,
    template: '<div class="rendered"></div>',
    link: function($scope, $element, $attrs){
      $scope.$watch($attrs['source'], function(newVal){
        newVal = newVal || '';
        // TODO Consider Debounce optimization
        render(newVal).then(function(content){
          $element.empty().append(content);
        });
        return newVal;
      });
    }
  };
}]);
