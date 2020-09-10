// What is we try to compare two differently decalared similar type of variables?

var intOne = new Number('7');
var intTwo = 7;
console.log('intOne', intOne); //intOne [Number: 7] 
console.log('intOne type', typeof intOne);// intOne type object 
// As the declaration is using function constructor, type is object.

console.log('intTwo type', typeof intTwo); // intTwo type number

console.log('intOne === intTwo',intOne === intTwo);//False // Now they are locally stored as different types
console.log('intOne == intTwo', intOne == intTwo);//True // Due to type coercion.