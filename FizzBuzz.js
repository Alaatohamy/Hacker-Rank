/**
 * Complete the fizzBuzz function below, iterate over n (inclusive)
 * Function expects n number
 * Function retune nothing
 * Function print FizzBuzz if the number divided by 3 and 5
 * Print Fizz if the number divided by 3 only (and not 5)
 * Print Buzz if the number divided by 5 only (and not 3)
 * Else print the number
 */

function fizzBuzz(n) {
  // Write your code here
  const arr = [...Array(n).keys()].map(x => x + 1);
  arr.forEach(i => {
      if((i % 3 === 0) && (i % 5 === 0)){
          console.log("FizzBuzz");
      }else if(i % 3 === 0) {
          console.log("Fizz");
      }else if(i % 5 === 0){
          console.log("Buzz");
      }else {
          console.log(i);
      }
  })
}

fizzBuzz(15)