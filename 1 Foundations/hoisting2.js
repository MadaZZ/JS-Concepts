// Before running this code, what do you think the output is? and why?

function bigBrother(){
    function littleBrother() {
      return 'it is me!';
    }
    return littleBrother();
    function littleBrother() {
      return 'no me!';
    }
  }
  bigBrother();


// Because the functions are fully hoisted at the context creation phase and at the time of execution their values are already present.