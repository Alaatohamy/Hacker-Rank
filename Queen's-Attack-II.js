Queen's Attack II

'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the queensAttack function below.
function queensAttack(n, k, r_q, c_q, obstacles) {
    let allRowColumnPositions = [];
    let allRowColumnPostionsCount = (n - 1) * 2;
    let allDiagonalPositions = [];
    let allDiagonalPositionsCount = 0;
    let totalCount = 0;

    /**Get all columns and rows postions array */
    for (let i = 1; i <= n; i++){
        if (i === r_q) {
            allRowColumnPositions.push([r_q, i]);
        } else if (i === c_q) {
            allRowColumnPositions.push([i, c_q]);
        } else {
            allRowColumnPositions.push([r_q, i], [i, c_q]);
        }
    }

    if (r_q === c_q) {
        allDiagonalPositionsCount = n - 1;
        if (k > 0) {
            obstacles.forEach(obstacle => {
                if (obstacle[0] === obstacle[1]) {
                    allDiagonalPositionsCount--;
                }
                if (obstacle.includes(r_q) || obstacle.includes(c_q)) {
                    allRowColumnPostionsCount--;
                }
            });
        }
    } else {
        /**Get all diagonal positions in case r_q !== c_q */
        for (let i = r_q - 1, j = c_q - 1; i > 0, j > 0; i-- , j--){
            allDiagonalPositions.push([i, j]);
            // if (k > 0) {
            //     for (let obst = 0; obst < obstacles.length; obst++){
            //         if (obstacles[obst] === [i, j]) {
            //             r = 0;
            //             break;
            //         } else {
            //             allDiagonalPositions.push([i, j]);
            //         }
            //     }
            // } else {
            //     allDiagonalPositions.push([r, c]);
            // }
        }
        for (let i = r_q + 1, j = c_q + 1; i <= n, j < n; i++ , j++) {
            allDiagonalPositions.push([i, j]);
        }
        for (let i = r_q + 1, j = c_q - 1; j > 0, i <= n; i++ , j--) {
            allDiagonalPositions.push([i, j]);
        }
        for (let i = r_q - 1, j = c_q + 1; i > 0, j <= n; i-- , j++) {
            allDiagonalPositions.push([i, j]);
        }

        /**Exclude all obstacles positions */
        if (k > 0) {
            obstacles.forEach(obstical => {
                allDiagonalPositions = allDiagonalPositions.filter(position => position !== obstical);
                if (obstical[0] === r_q) {
                    if (obstical[1] < c_q) {
                        for (let i = obstical[1] - 1; i < 0; i--){
                            allRowColumnPositions = allRowColumnPositions.filter(postion => postion.toString() === [r_q, i].toString());
                        }
                    } else {
                        for (let i = obstical[1] + 1; i <= n; i++) {
                            allRowColumnPositions = allRowColumnPositions.filter(postion => postion.toString() === [r_q, i].toString());
                        }
                    }
                }
                if (obstical[1] === c_q) {
                    if (obstical[0] < r_q) {
                        console.log('obstical', obstical[0]);
                        for (let i = obstical[0] - 1; i < 0; i--) {
                            allRowColumnPositions = allRowColumnPositions.filter(postion => postion.toString() === [i, c_q].toString());
                            console.log(allRowColumnPositions);
                        }
                    } else {
                        for (let i = obstical[0] + 1; i <= n; i++) {
                            allRowColumnPositions = allRowColumnPositions.filter(postion => postion.toString() === [i, c_q].toString());
                        }
                    }
                    // allRowColumnPostionsCount--;
                }
            });
        }
        allRowColumnPostionsCount = allRowColumnPositions.length;
        allDiagonalPositionsCount = allDiagonalPositions.length;
    }

    console.log(allRowColumnPostionsCount, allDiagonalPositionsCount);
    totalCount = allRowColumnPostionsCount + allDiagonalPositionsCount;
    return totalCount;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const nk = readLine().split(' ');

    const n = parseInt(nk[0], 10);

    const k = parseInt(nk[1], 10);

    const r_qC_q = readLine().split(' ');

    const r_q = parseInt(r_qC_q[0], 10);

    const c_q = parseInt(r_qC_q[1], 10);

    let obstacles = Array(k);

    for (let i = 0; i < k; i++) {
        obstacles[i] = readLine().split(' ').map(obstaclesTemp => parseInt(obstaclesTemp, 10));
    }

    let result = queensAttack(n, k, r_q, c_q, obstacles);

    ws.write(result + "\n");

    ws.end();
}
