/** COMPOSE AND PIPE
 * PIPE: The concept of pipe is simple — it combines n functions. 
 *   It’s a pipe flowing left-to-right, calling each function with the output of the last one.
 * COMPOSE: It’s just pipe in the other direction.
 * RESOURCE: https://medium.com/free-code-camp/pipe-and-compose-in-javascript-5b04004ac937
*/


const compose = (f, g) => (a) => f(g(a))
const pipe = (f, g) => (a) => g(f(a))
const multiplyBy3AndAbsolute = compose((num) => num * 3, Math.abs)
const absoluteAndMultiplyBy3 = pipe((num) => num * 3, Math.abs)
console.log('compose', multiplyBy3AndAbsolute(-50))
console.log('pipe', absoluteAndMultiplyBy3(-50))


function fn1() { }
function fn2() { }
function fn3() { } // Added so that the code does not throw error

fn1(fn2(fn3(50))); // This would be the order of running
compose(fn1, fn2, fn3)(50) //Right to left
pipe(fn3, fn2, fn1)(50)//left to right

