/** IDEMPOTENCE:
 * means that we would get same outputs with same inputs even after calling the function over and over
 * Resource: https://stackoverflow.com/questions/1077412/what-is-an-idempotent-operation
*/

function notGood() {
    return Math.random() // Always different output
    // new Date();
  }
  
  function good() {
    return 5 // Always same output
  }
  
  console.log(Math.abs(Math.abs(10)))