/** CommonJS
 * The CommonJS module specification is the standard used in Node.js for working with modules.
 * Creating, importing and exporting the modules becomes really easy.
 * But the code here is synchronous and usually not used in browsers.
 * It can be used in browsers too by using tools like browserify and Webpack
 * 
 * Notes:
 * - Run the code after removing 'require' modules
 * 
 * Resources:
 * - https://flaviocopes.com/commonjs/
 * - https://www.oreilly.com/library/view/learning-javascript-design/9781449334840/ch11s03.html
 * - Comparing all the Module designs: https://dev.to/iggredible/what-the-heck-are-cjs-amd-umd-and-esm-ikm
 * 
*/

// package/lib is a dependency we require
var lib = require( "package/lib" ); // Run after removing this

// behaviour for our module
function foo(){
    lib.log( "hello world!" );
}

// export (expose) foo to other modules
exports.foo = foo;