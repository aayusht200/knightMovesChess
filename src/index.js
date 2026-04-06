import './style.css';
function getMoves([x, y]) {
    let moves = [
        [2, 1],
        [2, -1],
        [-2, 1],
        [-2, -1],
        [1, 2],
        [1, -2],
        [-1, 2],
        [-1, -2],
    ];
    let result = [];
    for (let [dx, dy] of moves) {
        let newX = x + dx;
        let newY = y + dy;
        if (isValid(newX, newY)) {
            result.push([newX, newY]);
        }
    }
    return result;
}
function isValid(x, y) {
    return x >= 0 && x <= 7 && y >= 0 && y <= 7;
}

function canReach(start, end) {
    if (start[0] === end[0] && start[1] === end[1]) return true;
    let currQueue = [start];
    let visited = new Set();
    visited.add(toKey(start[0], start[1]));
    while (currQueue.length > 0) {
        let curr = currQueue.shift();
        if (curr[0] === end[0] && curr[1] === end[1]) return true;
        let currMoves = getMoves(curr);
        for (let [x, y] of currMoves) {
            if (!visited.has(toKey(x, y))) {
                visited.add(toKey(x, y));
                currQueue.push([x, y]);
            }
        }
    }
    return false;
}
function toKey(x, y) {
    return `${x},${y}`;
}

function knightMoves(start, end) {
    if (start[0] === end[0] && start[1] === end[1]) return [start];
    let currentQueue = [[start]];
    let visited = new Set();
    visited.add(toKey(start[0], start[1]));
    while (currentQueue.length > 0) {
        let currentPath = currentQueue.shift();
        let current = currentPath[currentPath.length - 1];
        if (current[0] === end[0] && current[1] === end[1]) return currentPath;
        let currentMoves = getMoves(current);
        for (let [x, y] of currentMoves) {
            if (!visited.has(toKey(x, y))) {
                visited.add(toKey(x, y));
                let newPath = [...currentPath, [x, y]];
                currentQueue.push(newPath);
            }
        }
    }
    return null;
}

console.log(getMoves([0, 0]));
console.log(canReach([0, 0], [3, 3]));
let result = knightMoves([3, 3], [4, 3]);
console.log(`You made it in ${result.length - 1} moves! Here is you path:`);
for (let step in result) console.log(result[step]);
