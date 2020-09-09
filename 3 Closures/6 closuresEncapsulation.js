// CLOSURES HELP US IN ENCAPSULATION \\
/**
 * We can selectively use the variables in the scope of the function
 * We can restrict the access of variables from outside the function
 */

// Run this in brower console
const makeNuclearButton = () => {
    let timeWithoutDestruction = 0;
    const passTime = () => timeWithoutDestruction++;
    const totalPeaceTime = () => timeWithoutDestruction;
    const launch = () => {
      timeWithoutDestruction = -1;
      return '💥';
    }
  
    setInterval(passTime, 1000);
    return {totalPeaceTime, launch} // Here we expose only the totalPeaceTime, launch functions.
  }
  
  const ww3 = makeNuclearButton();
  console.log(ww3.timeWithoutDestruction);