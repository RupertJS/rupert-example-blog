var _module = angular.module;
var _slice = Array.prototype.slice;
angular.module = function(moduleName, dependencies){
  var module = null;
  if(!(dependencies instanceof Array)){
    return _module.call(null, moduleName); // Just the getter
  } else {
    // Continuing in the normal casing,
    // creating a new module and adding methods.
  }

  module = _module.call(null, moduleName, dependencies); // A new module

  module.component = module.component || function(name, ComponentCtor){
    if (arguments.length === 1) {
      ComponentCtor = name;
      name = ComponentCtor.directive;
    }
    module.directive(name, function(){
      var directive = new ComponentCtor();

      directive.controller = directive.controller || NoopController;
      directive.scope = directive.scope || {};
      directive.restrict = directive.restrict || 'EA';

      directive.replace = directive.replace || false;
      directive.controllerAs = 'state';
      directive.bindToController = true;

      return directive;
    });

    return module;

    function NoopController(){}
  };

  module.page = module.page || function(stateName, config){
    config.controllerAs = 'state';
    module.config(function($stateProvider){
      $stateProvider.state(stateName, config);
    });
  };

  return module;
};
