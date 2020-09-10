/**  Step 1: Encapsulation
 * In OOP encapsualtion means to make a bundle/set of data to use it
 */
const elf1 = {
    name: 'kiko',
    weapon: 'bow',
    attack() {
        return `${elf1.name} Attack with ${elf1.weapon}`
    }
}

const elf2 = {
    name: 'kirk',
    weapon: 'sword',
    attack() {
        return `${elf2.name} Attack with ${elf2.weapon}`
    }
}

const elf3 = {
    name: 'kist',
    weapon: 'katana',
    attack() {
        return `${elf3.name} Attack with ${elf3.weapon}`
    }
}

console.log(elf1.attack())
console.log(elf2.attack())
console.log(elf3.attack())