// Create our own prototypes:
var human = { mortal: true }
var sparsh = Object.create(human);

console.log(human.isPrototypeOf(sparsh)); // true
console.log('sparsh', sparsh); // sparsh {} (as 'sparsh' has no properties of its own)
console.log(sparsh.mortal); // true (going up the prototype chain and getting the value)