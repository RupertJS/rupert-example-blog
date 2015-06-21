window.renderRoute =
angular.mock.renderRoute = function angularMockRenderRoute(path){
  var $element = angular.element('<ng-view></ng-view>');
  inject(function($compile, $location, $route, $rootScope){
    $location.path(path);
    var $scope = $rootScope.$new();
    $compile($element)($scope); // jshint ignore:line
    $rootScope.$digest();
    $element.$scope = $scope;
  });
  return $element;
};
