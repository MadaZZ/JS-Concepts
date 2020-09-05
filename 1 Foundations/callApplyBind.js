// call() and apply() are out of the box methods to call a function. So is bind() but a little different.
// call() is the method called when we call a function (). methodName.call() === methodName().
const wizard = {
    name: 'Sparsh',
    health: 12,
     heal(x,y) {
         this.health = 100 + x + y;
     }
};

const pawn = {
    name: 'Rana',
    health: 50
};

// Call and apply basically do the same thing, only the way we pass arguments is different.
// They help borrow a method from one object to another.

// Plain arguments for call().
 wizard.heal.call(pawn, 5, 10);

// Arguments in an array for apply().
 wizard.heal.apply(pawn, [5,10]);

// While call() and apply() call the function immediately, Bind() returns a method to execute later with the same context.
// Arguments are plain, same as call()
const healPawn = wizard.heal.bind(pawn, 10, 50);
healPawn();

console.log(pawn);
