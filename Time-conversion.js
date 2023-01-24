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
 * Complete the 'timeConversion' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function timeConversion(s) {
    // Write your code here
    const tArr = s.split(":");
    const hour = tArr[0];
    let newHour = hour;
    if(tArr[2].toLowerCase().includes("pm")){
        if(Number(newHour) !== 12){
          newHour = Number(newHour) + 12;
        }
    }else {
        if(Number(newHour) === 12){
           newHour = "00";
        }
    }
    const seconds = tArr[2].split("").slice(0, -2).join("");
    return `${newHour}:${tArr[1]}:${seconds}`;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    const result = timeConversion(s);

    ws.write(result + '\n');

    ws.end();
}
