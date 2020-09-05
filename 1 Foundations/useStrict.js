// 'use strict'

// What is the variable environment of the variable qwerty?
function check(){
    qwerty = 1000;
    return qwerty;
}

console.log(check());

/** 
 * It will be in global environment if we do not add the `use strict` to the top of the file.
 * Js engine just checks for var in each lexical env, if not found will define in global.
 * 'use strict' will constrain this behaviour and file will throw an error on execution.
 * It will restrict such abnormal behaviour and just say that the variable is not created.
**/