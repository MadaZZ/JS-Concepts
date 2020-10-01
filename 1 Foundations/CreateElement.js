/* HTML DOM createElement() Method

* You can create any HTML element using this method.

*/

const div = document.createElement("div"); // Creates a div element

const button = document.createElement("button"); // Creates a Button Element

button.innerHTML = "Button"; // Assign the Text to Button

document.body.appendChild(div); // Appending div in body
document.body.appendChild(button); // Appending button in body

// Button is listening for a click event annd set the innerHTML property to div
button.addEventListener("click", () => {
  div.innerHTML = "Hello Learners";
});
