/**
 * FUNCTION BINDING
 * function binding refers to the '.bind' function, that can be applied to any function.
 * It allows you to specify the context of the function and specify arguments to the function
 */

function multiplyNotBinded(a, b) {
    return a*b;
}
// ".bind" method takes the first argument as the value for "this" (context)
const multiplyByTwoUsingBind = multiplyNotBinded.bind(undefined, 2);
console.log(multiplyByTwoUsingBind(4));


/**
 * FUNCTION CURRYING
 * Currying refers to a custom made function. It gives the same effect as ".bind".
 * It allows more control and flexibility.
 */
function multiplyCurrying(a) {
    return function (b) {
        return a * b;
    }
}

// there is no need to specify the context(this) parameter
const multiplyByThreeByCurrying = multiplyCurrying(3);
console.log(multiplyByThreeByCurrying(5))

/**
 * Both BINDING and CURRYING can be called "Partial Functional Application".
 */