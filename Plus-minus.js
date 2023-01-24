'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function plusMinus(arr) {
    // Write your code here
    let positive = 0;
    let negative = 0;
    let zeros = 0;
    const arrayLength = arr.length;
    arr.forEach(item => {
        if(item > 0){
           positive++; 
        }else if(item < 0){
            negative++
        }else {
            zeros++
        }
    });
    const roundToSix = (number) => number.toFixed(6)
    console.log(roundToSix(positive / arrayLength));
    console.log(roundToSix(negative / arrayLength));
    console.log(roundToSix(zeros / arrayLength));
}

function main() {
    const n = parseInt(readLine().trim(), 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    plusMinus(arr);
}
