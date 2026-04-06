# Knight Moves – Project Documentation

## 📌 Objective
Build a function `knightMoves(start, end)` that returns the **shortest path** a knight takes from a starting square to a target square on an 8×8 chessboard.

---

## 🧠 Core Concept
- The chessboard is treated as a **graph**
- Each square = a node
- Each valid knight move = an edge
- Goal = find the **shortest path**

---

## ⚙️ Algorithm Choice
Use **Breadth-First Search (BFS)**:
- Works on unweighted graphs
- Guarantees shortest path
- Explores level by level

---

## 🏗️ Data Structures

### 1. Queue
Stores paths:
```
[[0,0]]
[[0,0],[2,1]]
[[0,0],[2,1],[3,3]]
```

### 2. Visited (Set)
```
Set { "0,0", "2,1" }
```

---

## ♞ Knight Moves
```
[x+2, y+1]
[x+2, y-1]
[x-2, y+1]
[x-2, y-1]
[x+1, y+2]
[x+1, y-2]
[x-1, y+2]
[x-1, y-2]
```

---

## 🔄 Flow

1. Initialize queue with start
2. Mark start visited
3. Loop:
   - Dequeue path
   - Get current position
   - If target → return path
   - Generate valid moves
   - Push unvisited moves as new paths

---

## 📍 Constraints
- Board: 8×8
- Range: 0–7
- Ignore invalid moves

---

## 🧩 Helpers

### toKey
```js
function toKey([x, y]) {
  return `${x},${y}`;
}
```

### isValid
```js
function isValid(x, y) {
  return x >= 0 && x < 8 && y >= 0 && y < 8;
}
```

---

## ⚠️ Mistakes
- Using DFS
- No visited tracking
- Mutating arrays
- Skipping bounds check

---

## 🚀 Plan
1. Build `getMoves()`
2. BFS (no path)
3. BFS with path
4. Format output

---

## 🎯 Example
```
knightMoves([0,0], [3,3])
```

Output:
```
[0,0]
[2,1]
[3,3]
```
