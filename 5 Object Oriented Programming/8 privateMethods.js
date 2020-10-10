/**
 * To add code - open for contributions
 * Resources to refer:
 * https://stackoverflow.com/questions/55611/javascript-private-methods
 * https://philipwalton.com/articles/implementing-private-and-protected-members-in-javascript/
 * https://ultimatecourses.com/blog/private-properties-methods-javascript-classes
*/
class Test {
  #c; //private 
  constructor() {
    this.a = 0; //default or public access
    this.b = 0; //default or public access
    this.#c = 0; //private 
  }
  setc(i) {
    this.#c = i;   // set value of c
  }
  getc() {
    return this.#c; //get value of c
  }
  #print(){
  console.log('Hello!');
  }  
}

class AccessTest {}
AccessTest.main = (arga) => {
  let ob = new Test();
  ob.a = 10; //Can be accessed directly
  ob.b = 20; // Can be accessed directly
  ob.c = 100; // ERROR!
  ob.setc(100);
  console.log('a, b, c: ' + ob.a + ' ' + ob.b + ' ' + ob.getc());
  print(); //ERROR!
};

/* When a member is private, it cannot be accessed by the members which are outside the class.To make methods, getter/setters or fields private, just give them a name starting with #.
Public members can be accessed anywhere, even outside the class. All members are public by default.*/
