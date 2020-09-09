// How do we control the view from getting loaded more than once even if the function is called multiple times?

// Initial Problem
let view;
function initialize() {
      view = '🏔';
      console.log('view has been set!')
}

initialize();
initialize();
initialize();

console.log(view)


// Solution code
let view;
const viewInit = (function () {
    let initNum = 1; // The external calling function does not have access to this variable
    return () => {
        if (initNum) {
            view = '🏞';
            console.log('view has been created 🏞');
            initNum--;
        } else {
            console.log('🏞  view is already present');
        }
    }
})(); // USING IIFE SO THAT THE FUNCTION CANNOT BE CALLED AND INITIALISED AGAIN, This will restrict multiple calls for good.

const initialize = viewInit;
initialize();
initialize();
initialize();
console.log(view);

const var2 = viewInit;
var2(); // Even the new function will fail to access the previous value.