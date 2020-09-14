/** CURRYING
 * Breaking a function that takes multiple arguments to multiple functions that take one argument.
 * We can create multiply utility functions by fixing one value as shown below.
 * WHAT IS CURRYING?: https://stackoverflow.com/questions/36314/what-is-currying
*/

const multiply = (a, b) => a * b

const curriedMultiply = (a) => (b) => a * b // curried the above function

console.log(curriedMultiply(5)(20))

const multiplyBy5 = curriedMultiply(5) // created a utility function
console.log(multiplyBy5(20));