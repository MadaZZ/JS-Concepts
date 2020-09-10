/** STEP2: Factory Functions
 * These are the functions that create objects
*/

function createElf(name, weapon) {
    return{
        name, // ES 6 sytax: if property and value are same, we can simply write the name itself
        weapon,
        attack() {
            return `${name} attack with ${weapon}`
        }
    }
}

const kiko = createElf('kiko', 'bow');
console.log(kiko.attack());

const kirk = createElf('kirk', 'sword');
console.log(kirk.attack());

const kist = createElf('kist', 'katana');
console.log(kist.attack());