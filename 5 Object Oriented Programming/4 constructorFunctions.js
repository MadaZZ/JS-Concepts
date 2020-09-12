/**Constructor Functions
 * These technically are regular functions. There are two conventions though:
   - They are named with capital letter first.
   - They should be executed only with "new" operator.

*/
function Elf(name, weapon) {
    this.name = name;
    this.weapon = weapon;
}

Elf.prototype.attack = function () { // We can add prototypes to the constructor functions
    return 'atack with ' + this.weapon
}

/**
 * When a function is executed with new, it does the following steps:
   - A new empty object is created and assigned to this.
   - The function body executes. Usually it modifies this, adds new properties to it.
   - The value of this is returned.
*/

const sam = new Elf('Sam', 'bow');
const peter = new Elf('Peter', 'bow');
console.log(sam.attack())