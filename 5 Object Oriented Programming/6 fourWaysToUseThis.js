// Four ways we use the 'this' keyword

// New binding - New keyword binds 'this' to the object we instantiate
function Person(name, age) {
  this.name = name;
  this.age = age;
  console.log(this);
}

const person1 = new Person('Xavier', 55)

//Implicit binding - 'this' is bound to the object we created
const person = {
  name: 'Karen',
  age: 40,
  hi() {
    console.log('hi' + this.name)
  }
}

person.hi()

//Explicit binding - Explicitly mention what we need to bind 'this' to
const person3 = {
  name: 'Karen',
  age: 40,
  hi: function () {
    console.log('hi' + this.setTimeout)
  }.bind(window) // Will throw an error with node, run on browser
}

person3.hi()

// Arrow functions - scope of 'this' is lexically bound instead of the usual dynamic binding.
const person4 = {
  name: 'Karen',
  age: 40,
  hi: function () {
    var inner = () => {
      console.log('hi ' + this.name)
    }
    return inner()
  }
}

person4.hi()
