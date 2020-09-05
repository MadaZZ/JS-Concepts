/* In JS, the primitive types are passed by value, 
   i.e If we copy one var to another a new memory space is allocated and both the varibles have no link.*/

/** The non primitive types are passed by reference, 
 * i.e If we copy one var to another a new memory space is not allocated and both the varibles point to to the same location.
 * Now if we make changes to any of the variables, other will change
*/

var a = {
    name: 'spar', 
    year: 1998
}
var c = {
    name: 'spar', 
    year: 1998
}
var b = a;
b.passout = 2019;

console.log('a', a);
console.log('b', b); // Same as a
console.log(a === c); // False, Even though the values are identical