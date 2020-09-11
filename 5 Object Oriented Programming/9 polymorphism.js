/** POLYMORPHISM
 * It is the ability to use the same method in multiple ways
 * In simple terms it is :
 * - Overriding: When method of one class is changes in the class that inherits it.
 * - Overloading: Adding more than expected params to a method
 */


class Character {
    constructor(name, weapon) {
        this.name = name;
        this.weapon = weapon;
    }
    attack() {
        return 'Attack with ' + this.weapon
    }
}
//Polymorphism--
class Queen extends Character {
    constructor(name, weapon, type) {
        super(name, weapon); // Sending contructor params to the super class
        this.type = type;
    }
    attack() { // Here we override the attack() method
        return `I am ${this.name} of ${this.type}, now bow down to me!`
    }
}

//Extend the Character class to have a Queen class. The output of the below code should be:
const victoria = new Queen('Victoria', 'army', 'hearts'); // create a new instace with the queen having (name, weapon, type). Type inlcudes: 'hearts', 'clubs', 'spades', 'diamonds'

victoria.attack() // will console.log the attack() method in Character class AND will return another string: 'I am the Victoria of hearts, now bow down to me! '


