/** FOUR PILLARS OF OBJECT ORIENTED PROGRAMMING
 * - ENCAPSULATION
 * - ABSTRACTION
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
var s = new Product("Sneakers","3000");  
console.log(s.company+" "+s.name+" "+s.price);



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
