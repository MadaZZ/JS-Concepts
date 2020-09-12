/** PARTIAL APPLICATION
 * It looks like currying but is not. 
 * Here we do not break the function to multiple function that 1 argument each
 * We just feed the function with a few params using bind and pass rest of the values later
*/

//Partial Application
const multiply = (a, b, c) => a * b * c
const partialMultiplyBy5 = multiply.bind(null, 5)

console.log(partialMultiplyBy5(10, 20)) // All the arguments in the second call

//currying
const multiplyCurrying = (a) => (b) => (c) => a * b * c
const multiplyCurryingby5 = multiplyCurrying(5)

console.log(multiplyCurryingby5(10)(20)) // One argument at a time