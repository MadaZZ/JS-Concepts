// Functions are first class citizens in JS. Why?

// 1 Functions can be stored in varibles

var one = function(){ }

// 2 Functions can be passed as arguments to another functions

function two( three ){
    three();
}
two( function(){ console.log('function three') } );

// 3 Functions can returned by other functions

function four(){
    return function() { console.log('tata') };
}

four()()