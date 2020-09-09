// How do we control the view from getting loaded more than once even if the function is called multiple times?

let view;
const viewInit = () => {
    let initNum = 1; // The external calling function does not have access to this variable
    return () => {
        if (initNum) {
            view = '🏞';
            console.log('view has been created 🏞');
            initNum --;
        } else {
            console.log('🏞  view is already present');
        }
    }
}

const initialize = viewInit();
initialize();
initialize();
initialize();