// This is one way to create a function using constructor

const afunction = new Function('num','num2', 'return num+num2');

console.log(afunction(4,5));