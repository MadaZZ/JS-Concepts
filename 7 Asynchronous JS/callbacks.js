//Callbacks make sure that a function is not going to run before a task is completed but will run right after the task has completed.
function print(callback) {  

    callback();

}
//There is a built-in method in JavaScript called “setTimeout”, which calls a function or evaluates an expression after a given period of time (in milliseconds). So here, the “message” function is being called after 3 seconds have passed. (1 second = 1000 milliseconds)

//In other words, the message function is being called after something happened (after 3 seconds passed for this example), but not before. So the message function is an example of a callback function.
const message = function() {  

    console.log("This message is shown after 3 seconds");

}

 

setTimeout(message, 3000);
