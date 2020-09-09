// Here we try to inherit properties of one object to another using prototype inheritance
let dragon = {
  name: 'Tanya',
  fire: true,
  fight() {
    return 5
  },
  sing() {
    if (this.fire) {
      return `I am ${this.name}, the breather of fire`
    }
  }
}

let lizard = {
  name: 'Kiki',
  fight() {
    return 1
  }
}
// Don't do this, bad performance. Show with bind.
lizard.__proto__ = dragon; // we never use .__proto__
console.log(dragon.isPrototypeOf(lizard));
console.log(lizard.fire)
console.log(lizard.sing())

// We can use .bind() method too
const lizardFire = dragon.sing.bind(lizard)
console.log('Bind', lizardFire())


// Checking if the methods are copied to the new object or not?
for (let prop in lizard) {
  if (lizard.hasOwnProperty(prop)) {
    console.log(`${prop} is a property of lizard`);
  } else {
    console.log(`${prop} is an inherent property`);
  }
}
/**
 * This shows that the properties are not copied to the new objects
 * JS engine looks at the object then goes up the prototype chain if it does not find the method.
 */ 