/*
Manipulating HTML tag's children(tag options such as href,src,etc...)
see here for more info- https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Manipulating_documents 
*/
const link = document.querySelector("a"); //Selecting the <a></a> tag
link.textContent = "Here"; //Changing the text inside the tag(innerHTML)
link.href = "https://www.youtube.com/"; //Changing the href of a tag

/*
End result-
<a href="https://www.youtube.com/">Here</a>
*/
