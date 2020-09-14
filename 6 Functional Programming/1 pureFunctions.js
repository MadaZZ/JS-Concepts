/** PURE FUNCTIONS
 * - When run, they have no side effect.
 * - For same input ----> same output
*/

//Side effects:
const array = [1, 2, 3];
function mutateArray(arr) {
    var newArr = [].concat(arr)
    newArr.pop()
    return newArr;
}

function mutateArray2(arr) {
    return arr.map(item => item*2)
}
//The order of the function calls will matter.
mutateArray(array)
mutateArray2(array)
console.log(array)

// map and concat methods can fix this issue of mutation
function mutateArray3(arr) {
    var newArr = [].concat(arr)
    newArr.pop()
    return newArr;
}

function mutateArray4(arr) {
    return arr.map(item => item*2)
}
//The order of the function calls will matter.
mutateArray3(array)
mutateArray4(array)
console.log(array)
