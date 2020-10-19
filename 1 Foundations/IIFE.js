/** IIFE
 * Immediately Invoked Function Expression
 * A JavaScript function that runs as soon as it is defined.
 * It is a commonly used way to implement closures as it prevents pollution of global namespace
 * 
 * Resource(s)
 * - Definition: https://developer.mozilla.org/en-US/docs/Glossary/IIFE
*/

var iife = (function(){
    var hello = 'hello';
    
    function hellofunc(){
        return 'func hello';
    }

    return {
        say: hello,
        func: hellofunc
    }

})();

console.log(iife);