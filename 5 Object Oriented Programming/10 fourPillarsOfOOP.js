/* RESOURCES
   https://www.javatpoint.com/javascript-oops-abstraction
   https://www.javatpoint.com/javascript-oops-polymorphism
   https://www.javatpoint.com/javascript-oops-inheritance
   https://www.javatpoint.com/javascript-oops-encapsulation
   https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object-oriented_JS */
   

// FOUR PILLARS OF OBJECT ORIENTED PROGRAMMING

/* - ENCAPSULATION- The JavaScript Encapsulation is a process of binding the data with the functions acting on that data. It allows us to control the data 
                     and validate it. To achieve an encapsulation in JavaScript we use var keyword to make data members private and use setter methods 
                     to set the data and getter methods to get that data. */

class Student  
{  
    constructor()  
    {  
       var name;  
       var rollno;  
    }  
    getName()  
    {  
      return this.name;       // to fetch name of student
    }  
    setName(name)  
    {  
      this.name=name;        // to store name in it
    }  
    getMarks()  
    {  
      return this.marks;     // to fetch marks of student
    }  
    setMarks(marks)  
    {  
      this.marks=marks;     // to stores marks of student
    }  
}  
var stud=new Student();  
stud.setName("Alicia");  
stud.setMarks(95);  
console.log(stud.getName()+" "+stud.getMarks());  // prints name and marks of the student



 /* ABSTRACTION - JavaScript abstraction is the process of hiding the implementation details and displaying only the functionality to all the users. 
                  JavaScript Abstraction ignores the unnecessary details and displays only the necessary ones. */

class ImplementAbstraction {
 // method to set values of internal members
  set(x, y) {
    this.a = x;                     // indirectly accessing private members
    this.b = y;
  }

  display() {
    console.log('a = ' + this.a);  
    console.log('b = ' + this.b);
  }
}
const obj = new ImplementAbstraction();
obj.set(10, 20);
obj.display();      // a = 10      b = 20



 /* INHERITANCE - The JavaScript inheritance is a mechanism that allows us to create new classes on the basis of already existing classes. 
                   It provides flexibility to the child class to reuse the methods and variables of a parent class.
                   The JavaScript extends keyword is used to create a child class on the basis of a parent class. 
                   It facilitates child class to acquire all the properties and behavior of its parent class.*/
class Shoes  
{  
  constructor()  
  {  
    this.company="Adidas";        
  }  
}  
class Product extends Shoes {  
  constructor(name,price) {  
   super();  
    this.name=name;  
    this.price=price;  
  }   
}  
var s = new Product("Sneakers","3000");            // constructor of sub-class is invoked
console.log(s.company+" "+s.name+" "+s.price);     // prints company after inheriting it from parent class 



/* POLYMORPHISM - Polymorphism provides an ability to call the same method on different JavaScript objects */
class A  
  {  
     display()  
    {  
      console.log("A is invoked");  // method for class A
    }  
  }  
class B extends A  
  {  
    display()  
    {  
      console.log("B is invoked");  //method for class B
    }  
  }  
  
var a=[new A(), new B()]  // creating instances of class A and B
a.forEach(function(msg)  
{  
  msg.display();  //both the display functions will be called
});  
