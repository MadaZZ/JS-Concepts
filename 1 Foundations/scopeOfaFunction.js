var globalScope = 'global';

function hello(){
    var a = 'a';
    return function sparsh(){
        var b = 'b';
        return function rana(){
            var c = 'c';
            console.log(globalScope);
            return 'Hello Sparsh Rana';
        }
    }
}

// hello()()();
