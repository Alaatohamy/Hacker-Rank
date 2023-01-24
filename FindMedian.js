/*
 * Complete the 'findMedian' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function findMedian(arr) {
  // Write your code here
  const sortedArr = [...arr].sort((a, b) => a - b);
  const medianIndex = (arr.length -1) /2;
  return sortedArr[medianIndex];
}

findMedian([0, 1,3, 4,5,6,2]);
