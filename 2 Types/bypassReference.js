// How to create a new memory space for arrays and objects?

/**
 * Sometimes we might need to preserve the old reference and copy to modify a new memory space
*/

// ** Working with Arrays ** \\
var array1 = [1, 2, 3, 4, 5];
var array2 = [].concat(array1); // or [...array1] // Creating a new array space 
var array3 = array1; // Pointing to same reference

array2.push(12);
array3.push('reference');

console.log('array1', array1); // array1 [ 1, 2, 3, 4, 5, 'reference' ]
console.log('array2', array2); // array2 [ 1, 2, 3, 4, 5, 12 ]
console.log('array3', array3); // array3 [ 1, 2, 3, 4, 5, 'reference' ]


// ** Working with Objects ** \\
var Object1 = { a: 'a', b: 'b', c: 'c'};
var Object2 = Object.assign({}, Object1); // or {...Object1} // Creating a new object space 
var Object3 = Object1; // Pointing to same reference

Object1.c = 'clash';
Object2.d = 'new item';

console.log('Object1', Object1); // Object1 { a: 'a', b: 'b', c: 'clash' }
console.log('Object2', Object2); // Object2 { a: 'a', b: 'b', c: 'c', d: 'new item' }
console.log('Object3', Object3); // Object3 { a: 'a', b: 'b', c: 'clash' }