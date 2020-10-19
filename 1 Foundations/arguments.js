/**
 * Accessing the JS arguments object, its an array-like object
 * It does not matter if we receive the arguments in the function in any variable or not. Every function will contain the "arguments" object.
 * Any type of argument can be passed to the function
 */
function printAllArgs(){
    console.log(typeof arguments);
    console.log(...arguments);
    console.log(arguments)
}

printAllArgs('Sparsh', 'Rana', 1, 2);

/** 
OUTPUT:
    object  
    Sparsh Rana 1 2
    [Arguments] { '0': 'Sparsh', '1': 'Rana', '2': 1, '3': 2 }
 */
