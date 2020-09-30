var date = new Date(); //Creating an object from a class(ref- https://www.w3schools.com/js/js_object_classes.asp)
var year = date.getFullYear(); //Triggering a method in a class(Instance) to get year
element_ref = document.getElementById("date"); //Grabbing a HTML element wiht ID "date"
year = toString(year); //Coverting year to string type because only string type is accepted when changing innerHTML
element_ref.innerHTML = year; //Setting the innerHTML value to the year variable
