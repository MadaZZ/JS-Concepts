// Definition of 'this'
// 'this' is an object that the function is a property of.

/** this KEYWORD
 * 'this' keyword in JavaScript allows to decide which object should be focal when invoking a function or a method.
 * It allows to reuse functions in different contexts or with different objects.
 * Sometimes it is difficult to tell what the 'this' keyword is referencing to.
 * One can tell by looking at "where the function which is using the 'this ' keyword was invoked".
 */
// Lets see in detail the different ways of evaluating this keyword.

// 1.Implicit Binding

const user = {
  name: "ritik",
  age: "22",
  welcome() {
    console.log(`Hello ${this.name} `);
  },
};

user.welcome();

/**
 *  So where does the method welcome() having 'this' keyword is invoked.
 *  user.welcome()
 *  Here look at left side of . (dot)
 *  What you found is - user. So here this is referencing to the user object.
 *  It is as if 'this.name' in welcome() method is changed to 'user.name' .
 */

// 2.Explicit Binding

function welcome() {
  console.log(`Hello ${this.name}`);
}

const user = {
  name: "ritik",
  age: "22",
};

/**
 * Here we can not do user.welcome().
 * So question is how to invoke welcome() so that 'this' refers to user object.
 * Their is where call,apply and bind methods comes in picture.
 * -Every function in JavaScript contains a call,apply and bind method for this purpose.
 */

//Let see how to use call() method to invoke welcome() with user object.

welcome.call(user);

/**
 * The first argument passed to call() will be what the 'this' keyword in welcome() is referencing to.
 * Now what if welcome() method need some other arguments.
 */

function welcome(state, country) {
  console.log(`Hello ${this.name} from ${state} in ${country}`);
}

const user = {
  name: "ritik",
  age: "22",
};

//Now how to pass -state, -country arguments using call()?

welcome.call(user, "Delhi", "India");

/**
 *  If there are other arguments to be passed to a function then in call() it is passed one by one.
 *  Now what about apply().
 *  apply also works in same manner but takes other arguments in one single array.
 */

welcome.apply(user, ["Delhi", "India"]);

/**
   * bind() is exact same as call() but instead of invoking the function immediately it returns a new function which 
     we can invoke later anytime.
   */

//3. Lexical Binding

let section = {
  title: "CSE",
  students: ["Ritik", "Gaurav", "Alice"],

  showList() {
    this.students.forEach(function (student) {
      console.log(`${student} , ${this.title}`); //Error: Cannot read property 'title' of undefined
    });
  },
};

section.showList();

//output
/**
 * Ritik, undefined
 * Gaurav, undefined
 * Alice, undefined
 */

/**
 * So why does 'this.title' giving us undefined?
 * Where the function is invoked?
 * function is anynomous and passed to forEach so we dont know.
 * Only we know that 'this' is not getting its context and so it is udefined.
 */

// Solution :
/**
 * with new arrow function 'this' keyword can use the context or refer to parent function or scope.
 * Here 'this' is using lexical binding.
 */

let section = {
  title: "CSE",
  students: ["Ritik", "Gaurav", "Alice"],

  showList() {
    this.students.forEach((student) => {
      console.log(`${student} , ${this.title}`);
    });
  },
};

section.showList();

//output
/**
 * Ritik, CSE
 * Gaurav, CSE
 * Alice, CSE
 */

//4. window Binding

function getAge() {
  console.log(`My age is ${this.age}`);
}

getAge();

// output : age is undefined

/**
 * No error why?
 * By default JavaScript refers this to window object.
 */

window.age = 23;

getAge();
//output : My age is 23

/**
 * To avoid this behaviour 'use strict'.
 * In the Strict mode if 'this' is not defined it will give undefined but not refer to window object
 */
