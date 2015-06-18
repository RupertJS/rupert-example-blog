angular.module('renderer', []).provider('renderer', function() {
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
    options = angular.extend(options, opts);
  };

  this.$get = Renderer;

  Renderer.$inject = ['$q'];
  function Renderer($q) {
    options.renderer = new options.renderer();
    marked.setOptions(options);
    return function(src) {
      return $q.when(marked(src));
    };
  }
});
