/*
In this example we are going to create an object, trigger a function 
in a class(method) and then display it in HTML
*/

//Creating an object from a class(ref- https://www.w3schools.com/js/js_object_classes.asp)
var date = new Date();
//Triggering a function in a class(method) to get year
var year = date.getFullYear();
//Grabbing a HTML element wiht ID "date"
element_ref = document.getElementById("date");
//Coverting year to string type because only string type is accepted when changing innerHTML
year = toString(year);
//Setting the innerHTML value to the year variable
element_ref.innerHTML = year;

/* 
End result-
<h1 id="date">2020</h1>
*/
