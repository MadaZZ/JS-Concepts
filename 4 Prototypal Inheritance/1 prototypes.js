/**
 * Prototypes are the mechanism by which JavaScript objects inherit features from one another. 
 * Refer: https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object_prototypes
*/

// In Javascript all the objects are prototypes of the same object.

// Checking arrays
const array = []; // or new Array()
console.log(array.__proto__.__proto__);

// Checking functions
function checkThis(){
}
console.log(checkThis.__proto__.__proto__);

// Run this code in browser 

// '.__proto__' gives the prototype of variable