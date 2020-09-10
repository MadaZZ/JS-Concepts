/** 
 * Now to save memory space on the attack function being repeated in each object we use prototype inheritance
*/

const elfFunctions = {
    attack() {
        return `Attack with ${this.weapon}`
    },
    health: 100,
    heal() {
        if (this.health < 100) {
            this.health = 100;
        }
    }
}

function createElf(name, weapon) {
    let newElf = Object.create(elfFunctions) // Prototypal inheritance of elfFunctions.
    newElf.name = name
    newElf.weapon = weapon

    return newElf
}

const kiko = createElf('kiko', 'bow');

// To check if the properties are its own or not
console.log(kiko.hasOwnProperty('name'));
console.log(kiko.hasOwnProperty('health'));

// Now we can use all these methods of elfFunctions with saved memory space as they are inherited.
console.log(kiko.attack());
console.log(kiko.health);
kiko.health = 20;
console.log(kiko.health);
kiko.heal();
console.log(kiko.health);

// Same works with all the newly created objects
const kirk = createElf('kirk', 'sword');
console.log(kirk.attack());

const kist = createElf('kist', 'katana');
console.log(kist.attack());