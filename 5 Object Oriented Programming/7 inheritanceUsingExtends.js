/**
 * Inheritance using the 'extent' keyword instead of prototype
 */

class Character {
    constructor(name, weapon) {
        this.name = name;
        this.weapon = weapon;
    }
    attack() {
        return 'attack with ' + this.weapon
    }
}

class Elf extends Character {
    constructor(name, weapon, type) {
        // console.log('what am i?', this); this gives an error
        super(name, weapon)
        console.log('what am i?', this);
        this.type = type;
    }
}

class Ogre extends Character {
    constructor(name, weapon, color) {
        super(name, weapon);
        this.color = color;
    }
    makeFort() { // this is like extending our prototype.
        return 'strongest fort in the world made'
    }
}

const houseElf = new Elf('Dolby', 'cloth', 'house')
//houseElf.makeFort() // error
const shrek = new Ogre('Shrek', 'club', 'green')

console.log(shrek.makeFort());

console.log(shrek.__proto__); // Ogre (The object class)
console.log(shrek.__proto__.__proto__); // Character (The superclass)


// Adding methods using classic prototype
Character.prototype.finish = function(){
    return `${this.name} is dead`
}
console.log(houseElf.attack());
console.log(houseElf.finish());

console.log(Character.hasOwnProperty('attack'));