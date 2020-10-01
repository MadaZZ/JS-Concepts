// Find the Largest and Smallest number in an unsorted array of integers 
// Return: object- containing a value of min and max
const arr = [1, 2, 3, 4, 100];
const findMaxMin = (arr) => {
  let max = arr[0];
  let min = arr[0];
  
  for(let i = 0; i < arr.length; i++) {
    if(arr[i] > max) {
      max = arr[i];
    } else if (arr[i] < min) {
      min = arr[i];
    }
  }
  
  return {
    "max": max,
    "min": min
  };
}
console.log(findMaxMin(arr)); // Returns object { "max": 100, "min": 1 }