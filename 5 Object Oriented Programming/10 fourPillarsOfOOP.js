/** FOUR PILLARS OF OBJECT ORIENTED PROGRAMMING
 * - ENCAPSULATION
 * - ABSTRACTION
 * - INHERITANCE
 * - POLYMORPHISM - Polymorphism provides an ability to call the same method on different JavaScript objects
*/
#Polymorphism
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
