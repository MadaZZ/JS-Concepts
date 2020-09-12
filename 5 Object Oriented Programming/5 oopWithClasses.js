/** class - the syntactic sugar in js
 * To make the inheritance and OOP look more like that in other languages, 'Class' was introduced in ES6
 * Under the hood the same thing happens, the same prototypes chains are made like in prototype inheritance
*/

class Ninja {
    constructor(name, weapon) {
        this.name = name;
        this.weapon = weapon;
    }
    attack() {
        return 'attack with ' + this.weapon
    }
}

const naruto = new Ninja('naruto', 'Shuriken');
console.log(naruto instanceof Ninja);//true // We have initiated an object named 'naruto' of Type 'Ninja' hence naruto is an instance of class Ninja

const shikamaru = new Ninja('shikamaru', 'shadow');
console.log(shikamaru.attack());