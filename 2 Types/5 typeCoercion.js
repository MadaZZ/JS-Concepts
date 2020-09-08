/** TYPE COERCION
 * It is behviour of the JS engine where it changes the type of data when '==' operator is used for comparison.
 * To avoid edge cases we use '===' operator. This prevents coercion and gives expected outputs
 */

console.log( false == "" ); // True
console.log( false == [] ); // True
console.log( false == {} ); // False
console.log( "" == 0 ); // True
console.log( "" == [] ); // True
console.log( "" == {} ); // False
console.log( 0 == [] ); // True
console.log( 0 == {} ) // False
console.log( 0 == null ); // False

// ** Links to read more ** \\
// Sign Comparison tables: https://dorey.github.io/JavaScript-Equality-Table/
// MDN Docs on Comparison: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness
// Details about algos and stuff: https://www.ecma-international.org/ecma-262/5.1/#sec-11.9.3