var greet = require ('./greet');

// require returns module.exports, not exports, because the Node engine returns module.exports,
// while this greet.js file sets exports equal to a new value.
// If this greet.js is invoked, the error code is "Object is not a function".

var greet2 = require ('./greet2');

// use "node app.js" to see that exports and module.exports now point to the same object, since
// exports was mutated to contain the greet property in greet2.js.
// To actually see the greeting, invoke the property, as below:

greet2.greet();

// With all this in mind, it may be easier to only use module.exports, rather than its shorthand
// exports, because of this feature.
// However, all this is ES5 anyway. Today, we use import and export, regardless.