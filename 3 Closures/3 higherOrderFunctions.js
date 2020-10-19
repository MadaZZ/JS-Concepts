/**
 *Higher order function is a function that takes in a function (callback) as an argument and returns a new function.
 *The function it returns can invoke the original callback function that was passed in.  
 *It helps in DRY (Dont Repeat Yourself) code pattern in software development. 
*/ 

//The syntax seems something like this

/*  
function higherOrderFunction(callback){
        return callback()
    }
    
    or

function higherOrderFunction (x,callback) {
  return function (y) {
    return callback(x,y)
  }
}  
*/

//If you’ve ever used any of the JavaScript Array methods, you’ve used both higher-order functions and callbacks.

function add5(i){
    return i+5;
}

[1,2,3].map(add5)
//[6, 7, 8]

/**
 * Here map is a higher order component.
 * It takes in a callback function which is add5.
 */

//Lets take us another example

const giveAccessTo = (name) =>{
    return 'Access Granted to ' + name;
}

function authenticate(person, checks) {
    let array = [];
    // you can add checks here for person.level
    for (let i = 0; i < checks; i++) {
        array.push(i)
    }
    return giveAccessTo(person.name)
}

function letPerson(person, fn) { // ++ We now tell the function what data to use when we call it not when we define it + tell it what to do.
    if (person.level === 'admin') {
        return fn(person, 100000)
    } else if (person.level === 'user') {
        return fn(person, 50000)
    }
}

function sing(person) {
    return 'la la la my name is ' + person.name
}

console.log(letPerson({ level: 'user', name: 'Tim' }, sing));
console.log(letPerson({ level: 'admin', name: 'Kitty' }, authenticate));