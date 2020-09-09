/*
  Closures allow a function to access variables from an enlosing scope or outerscope environment
  even after it leaves the scope in which it was written.
 */ 


 /*
 * Lexical scope of c() is different than a() and b()
 * Even after a() and b() are popped out of the callstack, variables are preserved
 */ 
function a() {
    let grandpa = 'grandpa'
    return function b() {
      let father = 'father'
      return function c() {
        let son = 'son'
        return `${grandpa} > ${father} > ${son}`
      }
    }
  }
  
  console.log(a()()());
  
  //closures and higher order function
  function boo(string) {
    return function(name) {
      return function(name2) {
        console.log(`hi ${name2}`)
      }
    }
  }
  
  const boo2 = (string) => (name) => (name2) => console.log(`hi ${name2}`)
  
  boo('hi')('john')('kara');
  
  // AHH! HOW DOES IT REMEMBER THIS 5 years from now?
  booString = boo2('sing');
  booStringName = booString('John');
  booStringNameName2 = booStringName('kara')
  