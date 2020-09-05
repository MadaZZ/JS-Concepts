// Definition of 'this'
// 'this' is an object that the function is a property of.

/* Why is 'this' important?*/


//1- It gives methods, access to their object.
var obj = {
    name: 'sparsh',
    lalala: function(){
        return `lalala ${this.name}` // lalala get access to the object it is part of i.e obj
    },
    bububu(){ // new sytax
        return `bububu ${this.lalala()}` // bububu get access to the object it is part of i.e obj
    }
}
//console.log(obj.bububu());



// 2- Execute same code for multiple objects.
function importantName(){
    console.log(this.name) 
}
// Here we can use the same method for different objects as 'this' would return the object that the function is a property of
const name = 'Sparsh';

const obj1 = {
    name: 'Rana',
    importantName: importantName
}
const obj2 = {
    name: 'Madazz',
    importantName: importantName
}

obj2.importantName(); 