// What would be the output of 'i' in the setTimeout?
// PROBLEM
const array = [1, 2, 3, 4];
for (var i = 0; i < array.length; i++) {
    setTimeout(function () {
        console.log('I am at index ' + i)
    }, 3000)
} // 'i' is printed to be 4 each time


// SOLUTION 1 - changing variable decleration
for (let i = 0; i < array.length; i++) { // We init 'i' as let which sets the value of i to be block scoped, while var is of global scope
    setTimeout(function () {
        console.log('Let I am at index ' + i)
    }, 3000)
}

// SOLUTION 2 - using closures
for (var i = 0; i < array.length; i++) {
    (function (value) {
        setTimeout(function () {
            console.log('Closure I am at index ' + array[value])
        }, 3000)
    })(i)
}