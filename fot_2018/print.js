var createConfig = require('./config');
var createFileRenderer = require('./lib/createFileRenderer');

// do all that jazz
var seed = typeof process.argv[2] !== 'undefined'
  ? String(process.argv[2])
  : '123';
//var seed = 123;
console.log(seed);
var config = createConfig(seed);

createFileRenderer(config);
