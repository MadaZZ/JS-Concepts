/** Imperative vs Declarative
 * Imperative: When you need to explicitely explain the code what to do and how to do it
 * Declarative: When you have to tell the code what to do without explaining how to do it
 * Resource: https://medium.com/@zach.gollwitzer/imperative-vs-declarative-programming-procedural-functional-and-oop-b03a53ba745c#:~:text=The%20difference%20between%20Imperative%20and%20Declarative%20programming%20is%20related%20to,about%20what%20a%20program%20does.
*/

// Imperative loop
for (let i = 0; i < 5; i++) {
    console.log(i)
}


// Declarative loop
[1, 2, 3].forEach(item => console.log(item))