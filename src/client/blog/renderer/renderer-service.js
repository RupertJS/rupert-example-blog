angular.module('renderer', []).provider('renderer', function() {
  var Renderer, options, treeLang;
  var options = {
    renderer: marked.Renderer,
    gfm: true,
    tables: true,
    breaks: false,
    pedantic: false,
    sanitize: false,
    smartLists: true,
    smartypants: false
  };
  this.updateOptions = function(opts) {
    return options = angular.extend(options, opts);
  };
  Renderer = function($q) {
    options.renderer = new options.renderer();
    marked.setOptions(options);
    return function(src) {
      return $q.when(marked(src));
    };
  };
  Renderer.$inject = ['$q'];
  this.$get = Renderer;
});
