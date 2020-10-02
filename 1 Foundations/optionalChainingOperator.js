/* OPTIONAL CHAINING OPERATOR
 * permits reading the value of a property located deep within
 * a chain of connected objects without having to expressly
 * validate each reference in the chain is valid
 *
 * The syntax of the optional chaining operator looks like this:
 * obj?.first?.second
 *
 * Resources:
 * - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining
 * - https://medium.com/@ger86/javascript-el-operador-optional-chaining-d228a6382c6b
 */

/* Example 1
 * A person object, each person has a name and a dog, each
 * dog  has a name and age.
 */
var person = {
  name: "Marlon",
  dog: {
    name: "Toby",
    age: "6",
  },
};
var dogName = person?.dog?.name;
//expected output: Toby
console.log(dogName);

// it's equivalent to
var dogName = person.dog && person.dog.name;
//expected output: Toby
console.log(dogName);

// without validating, it's equivalent to
var dogName = person.dog.name;
//expected output: Toby
console.log(dogName);

/* But what if a property doesn't exist and you try to
 *  access it? let's try it.
 */
var person = {
  name: "Marlon",
};

var dogName = person?.dog?.name;
//expected output: undefined
console.log(dogName);

// it's equivalent to
var dogName = person.dog && person.dog.name;
//expected output: undefined
console.log(dogName);

// without validating, it's equivalent to
var dogName = person.dog.name;
//expected output: Uncaught TypeError: Cannot read property 'name' of undefined
console.log(dogName);

/* 
So the Optional Chaining Operator is a way of accessing values through connected objects, in an elegant way and validating the value of a property before accessing a sub-property of it. This avoids the error and the interruption of the execution flow of our code that would occur if a subproperty were accessed without first validating if the property that contains it exists.
*/
