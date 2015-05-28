var nodemon = require('nodemon');
var package = require('./package');
var config = require('./server');

if(config.routing && !config.server){
  throw new Error("Please update the server config.");
}

nodemon({
  script: package.main,
  //TODO Find a way to only declare the defaults once?
  ext: (config.server.extensions || ['js']).join(' '),
  watch: (config.server.root || './src/server')
});

nodemon.on('start', function () {
  console.log('Rupert has started');
}).on('quit', function () {
  console.log('Rupert has quit');
}).on('restart', function (files) {
  console.log('Rupert restarted due to: ', files);
});
