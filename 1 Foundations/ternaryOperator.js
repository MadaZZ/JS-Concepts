/** CONDITIONAL TERNARY OPERATOR
 * The Ternary Operator is the only JavaScript operator
 * that takes three operands, a condition then an expression
 * to execute if condition is true and finally an expression
 * to execute if condition is false or null.
 *
 * The syntax of the ternary operator looks like this
 * condition ? expression_true : expression_false
 *
 * Resources:
 * - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator
 * - https://www.javascripttutorial.net/javascript-ternary-operator
 */

/* Example 1
 *  You must be 16 years to drive
 */
var age = 19;
var canDrive = age > 16 ? "yes" : "no";
//expected output: yes
console.log(canDrive);

/* Example 2
 *  If you are a customer you pay $5.0, if you are not you pay $7.0
 */
function getPay(isCustomer) {
  return isCustomer ? "$5.0" : "$7.0";
}
/* it's equivalent to 
function getPay(isCustomer){
    if(isCustomer){
        console.log("$5.0");
    }else{
        console.log("$7.0");
    }
}
*/

//expected output: $5.0
console.log(getPay(true));

//expected output: $7.0
console.log(getPay(false));

//expected output: $7.0
console.log(getPay(null));
