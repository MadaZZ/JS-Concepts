// Immediately Invoked Function Expression

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