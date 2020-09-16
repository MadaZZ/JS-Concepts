/** Asynchronous Module Definition (AMD)
 * This is another way of modularizing and bundle js code.
 * Used by requirejs
 * 
 * Notes:
 * - Standalone Code will not run.
 * 
 * Resources:
 * - https://riptutorial.com/javascript/example/16341/asynchronous-module-definition--amd-
 * - Everything related to require and AMD: https://requirejs.org/
 * - Comparing all the Module designs: https://dev.to/iggredible/what-the-heck-are-cjs-amd-umd-and-esm-ikm
*/

// Define a module "myModule" with two dependencies, jQuery and Lodash
define("myModule", ["jquery", "lodash"], function ($, _) {
    // This publicly accessible object is our module
    // Here we use an object, but it can be of any type
    var myModule = {};

    var privateVar = "Nothing outside of this module can see me";

    var privateFn = function (param) {
        return "Here's what you said: " + param;
    };

    myModule.version = 1;

    myModule.moduleMethod = function () {
        // We can still access global variables from here, but it's better
        // if we use the passed ones
        return privateFn(windowTitle);
    };

    return myModule;
});