// We use Object.assign() to clone one object to another. But what if there is an object inside an object?

// ** Shallow cloning ** \\
var Object1 = { a: 'a', b: 'b', c: {inside: 'this is a deep reference'}};
var Object2 = Object.assign({}, Object1); // or {...Object1} // Creating a new object space 
var Object3 = Object1; // Pointing to same reference

Object1.c.inside = 'changed';
Object2.d = 'new item';

console.log('Object1', Object1); // Object1 { a: 'a', b: 'b', c: { inside: 'changed' } }
console.log('Object2', Object2); // Object2 { a: 'a', b: 'b', c: { inside: 'changed' }, d: 'new item' }
console.log('Object3', Object3); // Object3 { a: 'a', b: 'b', c: { inside: 'changed' } }

/**
 * This happens as the new reference was only created for the overall object but not the internal object, 
 * that is still is passed by its original reference
 * The solution here is deep cloning using JSON api.
*/ 

// ** Deep cloning ** \\
var Object2 = JSON.parse(JSON.stringify(Object1)); // This will create a new object on all the levels
Object1.c.inside = 'changed again';
console.log('Object1', Object1); // Object1 { a: 'a', b: 'b', c: { inside: 'changed again' } }
console.log('Object2', Object2); // Object2 { a: 'a', b: 'b', c: { inside: 'changed' }, d: 'new item' }
console.log('Object3', Object3); // Object3 { a: 'a', b: 'b', c: { inside: 'changed again' } }