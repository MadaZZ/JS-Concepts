Object-oriented programming, a set of techniques that use objects (and related concepts) as the central idea of program organization.
Encapsulation
The core idea in object-oriented programming is to divide programs into smaller pieces and make each piece responsible for managing its own state. This way, some knowledge about the way a piece of the program works can
be kept local to that piece. Someone working on the rest of the program does not have to remember or even be aware of that knowledge. Whenever these local details change, only the code directly around it needs to be updated.
Different pieces of such a program interact with each other through interfaces, limited sets of functions or bindings that provide useful functionality at a more abstract level, hiding their precise implementation.
Such program pieces are modeled using objects. Their interface consists of a specific set of methods and properties. Properties that are part of the interface
are called public. The others, which outside code should not and can not touch, are called private.
Even though the language doesn’t have this distinction built in, JavaScript programmers are successfully using this idea. Typically, the available interface
is described in documentation or comments. It is also common to put an underscore (_) character at the start of property names to indicate that those
properties are private. Separating interface from implementation is a great idea. It is usually called encapsulation.

Methods
Methods are nothing more than properties that hold function values. This is a simple method:
let rabbit = {};
rabbit.speak = function(line) {
console.log(`The rabbit says '${line}'`);
};
rabbit.speak("I'm alive.");
// → The rabbit says 'I'm alive.'
Usually a method needs to do something with the object it was called on.
When a function is called as a method—looked up as a property and immediately
called, as in object.method()—the binding called this in its body automatically
points at the object that it was called on.
function speak(line) {
console.log(`The ${this.type} rabbit says '${line}'`);
}
let whiteRabbit = {type: "white", speak};
let hungryRabbit = {type: "hungry", speak};
whiteRabbit.speak("Oh my ears and whiskers, " +
"how late it's getting!");
// → The white rabbit says 'Oh my ears and whiskers, how
// late it's getting!'
hungryRabbit.speak("I could use a carrot right now.");
// → The hungry rabbit says 'I could use a carrot right now.'
You can think of this as an extra parameter that is passed in a different
way. If you want to pass it explicitly, you can use a function’s call method,
which takes the this value as its first argument and treats further arguments
as normal parameters.
speak.call(hungryRabbit, "Burp!");

A class defines the shape of a type of object—what methods and properties it has. Such an object is called an instance of the class. Prototypes are useful for defining properties for which all instances of a class
share the same value, such as methods. Properties that differ per instance, such as our rabbits’ type property, need to be stored directly in the objects
themselves. So to create an instance of a given class, you have to make an object that derives from the proper prototype, but you also have to make sure it, itself, has
the properties that instances of this class are supposed to have. This is what a constructor function does.
function makeRabbit(type) {
let rabbit = Object.create(protoRabbit);
rabbit.type = type;
return rabbit;
}
JavaScript provides a way to make defining this type of function easier. If you put the keyword new in front of a function call, the function is treated as
a constructor. This means that an object with the right prototype is automatically created, bound to this in the function, and returned at the end of the
function. The prototype object used when constructing objects is found by taking the prototype property of the constructor function.
function Rabbit(type) {
this.type = type;
}
Rabbit.prototype.speak = function(line) {
console.log(`The ${this.type} rabbit says '${line}'`);
};
let weirdRabbit = new Rabbit("weird");
Constructors (all functions, in fact) automatically get a property named prototype, which by default holds a plain, empty object that derives from
Object.prototype. You can overwrite it with a new object if you want. Or you can add properties to the existing object, as the example does. By convention, the names of constructors are capitalized so that they can
easily be distinguished from other functions. It is important to understand the distinction between the way a prototype
is associated with a constructor (through its prototype property) and the way objects have a prototype (which can be found with Object.getPrototypeOf).
The actual prototype of a constructor is Function.prototype since constructors are functions. Its prototype property holds the prototype used for instances created through it.
console.log(Object.getPrototypeOf(Rabbit) ==
Function.prototype);
// → true
console.log(Object.getPrototypeOf(weirdRabbit) ==
Rabbit.prototype);
// → true

Polymorphism
When you call the String function (which converts a value to a string) on an
object, it will call the toString method on that object to try to create a meaningful
string from it. I mentioned that some of the standard prototypes define
their own version of toString so they can create a string that contains more
useful information than "[object Object]". You can also do that yourself.
Rabbit.prototype.toString = function() {
return `a ${this.type} rabbit`;
};
console.log(String(blackRabbit));
// → a black rabbit
This is a simple instance of a powerful idea. When a piece of code is written
to work with objects that have a certain interface—in this case, a toString
method—any kind of object that happens to support this interface can be
plugged into the code, and it will just work.
This technique is called polymorphism. Polymorphic code can work with
values of different shapes, as long as they support the interface it expects.
I mentioned in Chapter 4 that a for/of loop can loop over several kinds of
data structures. This is another case of polymorphism—such loops expect the
data structure to expose a specific interface, which arrays and strings do and we can also add this interface to your own objects.

JavaScript’s prototype system makes it possible to create a new class, much
like the old class, but with new definitions for some of its properties. The
prototype for the new class derives from the old prototype but adds a new
definition for, say, the set method.
In object-oriented programming terms, this is called inheritance. The new
class inherits properties and behavior from the old class.
class SymmetricMatrix extends Matrix {
constructor(size, element = (x, y) => undefined) {
super(size, size, (x, y) => {
if (x < y) return element(y, x);
else return element(x, y);
});
}
set(x, y, value) {
super.set(x, y, value);
if (x != y) {
super.set(y, x, value);
}
}

}
let matrix = new SymmetricMatrix(5, (x, y) => `${x},${y}`);
console.log(matrix.get(2, 3));
// → 3,2
The use of the word extends indicates that this class shouldn’t be directly based on the default Object prototype but on some other class. This is called
the superclass. The derived class is the subclass. To initialize a SymmetricMatrix instance, the constructor calls its superclass’s constructor through the super keyword. This is necessary because if this new
object is to behave (roughly) like a Matrix, it is going to need the instance properties that matrices have. To ensure the matrix is symmetrical, the constructor
wraps the element function to swap the coordinates for values below the diagonal.
The set method again uses super but this time not to call the constructor but to call a specific method from the superclass’s set of methods. We are redefining set but do want to use the original behavior. Because this.set
refers to the new set method, calling that wouldn’t work. Inside class methods,
super provides a way to call methods as they were defined in the superclass.
Inheritance allows us to build slightly different data types from existing data
types with relatively little work. It is a fundamental part of the object-oriented
tradition, alongside encapsulation and polymorphism. But while the latter two
are now generally regarded as wonderful ideas, inheritance is more controversial.
Whereas encapsulation and polymorphism can be used to separate pieces
of code from each other, reducing the tangledness of the overall program, inheritance
fundamentally ties classes together, creating more tangle. When
inheriting from a class, you usually have to know more about how it works
than when simply using it. Inheritance can be a useful tool, and I use it now
and then in my own programs, but it shouldn’t be the first tool you reach for,
and you probably shouldn’t actively go looking for opportunities to construct
class hierarchies (family trees of classes).
