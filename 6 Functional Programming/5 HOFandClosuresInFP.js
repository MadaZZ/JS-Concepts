// HOF: Higher order functions
// Functions that return functions and/or take them as arguments
const hof = (fn) => fn(5);
hof(function a(x){ return x})
console.log(hof(function a(x){ return x}))
/** Closures
 * Funtions that return functions and have access to variables of parent scope even after parent is off the callstack
 * TO use them in functional programming we do not change the value of parent variable
*/
const closure = function() {
  let count = 55;
  return function getCounter() {
    return count;
  }
}

const getCounter = closure()
console.log(getCounter())
console.log(getCounter())
console.log(getCounter())