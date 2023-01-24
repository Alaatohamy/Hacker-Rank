'use strict';

const fs = require('fs');

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
 * Complete the 'getTotalX' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY a
 *  2. INTEGER_ARRAY b
 */

function getTotalX(a, b) {
    // Write your code here
    let counter = 0;
    let GCD_b = gcd(b);
    let LCM_a = lcm(a);
    let i = 0;
        
    for (let i = 2, start = LCM_a; start * i < GCD_b; i++){
        if (GCD_b % (start * i) === 0 && (start * i <= Math.min(...b)) && (start * i >= Math.max(...a))) {
            console.log(start * i);
            counter++;
        }
    }
    console.log('counter', counter);
    return counter;
}

function lcm(arr) {
    if (arr.length === 2) {
        let a = arr[0];
        let b = arr[1];
        let temp = b;
        while (b > 0) {
            temp = b;
            b = a % b;
            a = temp;
        }
        return a;
    } else {
        var last = arr.pop();
        return lcm([last, lcm(arr)]);
    }
}

function gcd(arr) {
    if (arr.length === 2) {
        return (arr[0] * arr[1] / lcm(arr));
    } else {
        var last = arr.pop();
        return gcd([last, gcd(arr)]);
    }
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const firstMultipleInput = readLine().replace(/\s+$/g, '').split(' ');

    const n = parseInt(firstMultipleInput[0], 10);

    const m = parseInt(firstMultipleInput[1], 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    const brr = readLine().replace(/\s+$/g, '').split(' ').map(brrTemp => parseInt(brrTemp, 10));

    const total = getTotalX(arr, brr);

    ws.write(total + '\n');

    ws.end();
}
