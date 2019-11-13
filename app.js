
//function sayHello(name) {
  //  console.log('Hello '+name);
    
//}
//sayHello('Mosh');
//global object in node, all are objects of window object, like u can call, window.console.log, window.setTimeout() etc
//since we don't have window object in node(because it is browser object at runtime), we can access these in node
//by using global, i.e., global.setTimeout() et
//console.log(window); //global object
//setTimeout();//can be used in nodejs and in browser
//clearTimeout();
//setInterval();
//clearInterval();

//var message = '';//this variable is also access to window object in js engine, since we dont have global in node, all 
//the above are accessible using global except var message, which is not accessible in node even using global
//console.log(module)

var logger = require('./logger')// to import/load other module, if logger is another folder, like test, use ('./test/logger)
//console.log(logger) // to display what are ll things available to this module from logger module
//var logger = require('./logger')// instead of var, use constant to avoid override of value of method
logger.log('krishna');
//$jshint app.js use this to know errors
