/** MODULE PATTERN
 * It is a commonly used Design Pattern which is used to wrap a set of variables and functions together in a single scope.
 * An old way of implementing modules
 *
 * Notes:
 * - Link this to an HTML file and try to check what methods are available in the global scope
 *  
 * Resources:
 * - https://coryrylan.com/blog/javascript-module-pattern-basics
 * - https://medium.com/technofunnel/data-hiding-with-javascript-module-pattern-62b71520bddd#:~:text=The%20Module%20Pattern%20is%20one,the%20scope%20of%20the%20function. 
 * - Comparing all the Module designs: https://dev.to/iggredible/what-the-heck-are-cjs-amd-umd-and-esm-ikm
 * 
*/

// It is implemented using IIFE
var battleModule = (function () {
    var naruto = 'uzumaki'
    var sasuke = 'uchiha'
    
    function fight(char1, char2) {
        var attack1 = Math.floor(Math.random() * char1.length)
        var attack2 = Math.floor(Math.random() * char2.length)
        return attack1 > attack2 ? `${char1} wins` : `${char2} wins`
    }

    return { // Return what you want to make avaliable to the global namespace
        fight
    }

})();

// console.log(battleModule.fight('hashirama', 'madara')); // works fine
// console.log(battleModule.naruto); // Can't be accessed as it is a private variable

/** PROS AND CONS OF MODULE PATTERN
 * 
 * PROS:
 * - Makes the code modular
 * - Helps implement abstraction and encapsulation
 * - Code can be used globally
 * 
 * CONS:
 * - Still polluting the globall namespace, 'battleModule' can be manipulated as a variable by some other script.
 * - The scripts need to be carefully placed in sequence to prevent dependency failures.
*/