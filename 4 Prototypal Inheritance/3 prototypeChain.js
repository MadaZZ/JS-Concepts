//Every Prototype chain links to a prototype object{}
function multiplyBy5(num) {
    return num * 5
}

console.log(multiplyBy5.__proto__);
console.log(Function.prototype);
console.log(multiplyBy5.__proto__.__proto__)
console.log(Object.prototype)
console.log(multiplyBy5.__proto__.__proto__.__proto__)
console.log(typeof Object)
console.log(typeof {})

// Run in browser and see compare the results