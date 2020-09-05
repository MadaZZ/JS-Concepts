// Interview question?
// What will he the order of print and why?
console.log("Hello");
setTimeout(() => {console.log("Sparsh")}, 0);
Promise.resolve('okay').then(() => { console.log("Promise?") });
console.log("Rana")

/// ::ANSWER::
console.log("Hello"); // 1
setTimeout(() => {console.log("Sparsh")}, 0); // 4
Promise.resolve('okay').then(() => { console.log("Promise?") }); // 3
console.log("Rana") // 2

// Reason: setTimeout is a webAPI function js engine executes later