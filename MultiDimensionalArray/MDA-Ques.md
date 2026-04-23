# 📘 Matrix & 2D Array Questions — Explained

---

## Question 1 — Sum of Diagonals

### Code

```javascript
let mat = [[1,1,1,1],[1,1,1,1],[1,1,1,1],[1,1,1,1]]
let sum = 0 
for(let i = 0 ; i < mat.length; i++){
    for(let j = 0 ; j < mat[i].length; j++){
        if(i == j || i+j == (mat.length-1)){
            sum += mat[i][j]
        }
    }
}
console.log(sum)
```

### Explanation

- `i == j` → **Primary diagonal** (top-left to bottom-right): positions (0,0), (1,1), (2,2), (3,3)
- `i + j == mat.length - 1` → **Secondary diagonal** (top-right to bottom-left): positions (0,3), (1,2), (2,1), (3,0)
- `mat.length - 1 = 3` (4x4 matrix has index 0 to 3)
- For a 4x4 matrix of all `1`s, both diagonals have 4 elements each, but the **center elements are shared** (when n is odd). Here n=4 (even), so no overlap.

### Output

```
8
```

> 4 elements from primary diagonal + 4 from secondary = **8** (all are 1s, so 4+4=8)

---

## Question 2 — Transpose of Matrix (With Extra Space)

### Code

```javascript
let mat = [[1,1,1],[2,2,2]]
let m = mat.length       // rows = 2
let n = mat[0].length    // cols = 3
let transMat = Array.from({length : n},()=> new Array(m))

for(let i = 0 ; i < mat.length ; i++){
    for(let j = 0 ; j < mat[i].length ; j++){
        transMat[j][i] = mat[i][j]
    }
}
for(let i = 0 ; i < transMat.length ; i++){
    for(let j = 0 ; j < transMat[i].length ; j++){
       process.stdout.write( transMat[i][j] + '  ')
    }
    console.log()
}
```

### Explanation

- Original matrix is **2 rows × 3 cols**.
- Transpose means **rows become columns** — result is **3 rows × 2 cols**.
- `transMat[j][i] = mat[i][j]` — swaps row and column index.
- `Array.from({length: n}, () => new Array(m))` creates a new matrix of size `n × m`.

### Visual

```
Original (2x3):        Transposed (3x2):
1  1  1                1  2
2  2  2                1  2
                       1  2
```

### Output

```
1  2  
1  2  
1  2  
```

---

## Question 3 — Rotate the Matrix (90° Clockwise)

### Code

```javascript
let matrix = [[1,2,3],[4,5,6],[7,8,9]]
let m = matrix.length
let n = matrix[0].length
let transMat = Array.from({length : m} , ()=> new Array(n))

// Step 1: Transpose
for(let i = 0 ; i < matrix.length ; i++){
    for(let j = 0 ; j < matrix[i].length; j++){
        transMat[j][i] = matrix[i][j]
    }
}

// Step 2: Reverse each row
for(let i = 0 ; i < transMat.length ; i++){
    let j = 0 , k = transMat[i].length - 1
    while(j<k){
        let temp = transMat[i][j]
        transMat[i][j] = transMat[i][k]
        transMat[i][k] = temp 
        j++;
        k--
    }
}

// Step 3: Copy back to original matrix
for(let i = 0 ; i < matrix.length; i++){
    for(let j = 0 ; j < matrix[i].length; j++){
        matrix[i][j] = transMat[i][j]
    }
}
console.log(matrix)
```

### Explanation

90° clockwise rotation is done in **2 steps**:

1. **Transpose** → `transMat[j][i] = matrix[i][j]`
2. **Reverse each row** → using two-pointer swap

### Visual

```
Original:      After Transpose:    After Row Reverse (= 90° CW):
1  2  3        1  4  7             7  4  1
4  5  6   →    2  5  8      →      8  5  2
7  8  9        3  6  9             9  6  3
```

### Output

```
[ [ 7, 4, 1 ], [ 8, 5, 2 ], [ 9, 6, 3 ] ]
```

---

## Question 4 — Set Matrix Zeros

> If an element is `0`, set its entire row and column to `0`.

### Code

```javascript
let matrix = [[0,1,2,0], [3,4,5,2], [1,3,1,5]]
let row = []
let col = []

// Step 1: Find all positions of 0
for(let i = 0 ; i < matrix.length; i++){
    for(let j = 0 ; j < matrix[i].length ; j++){
        if(matrix[i][j] == 0){
            row.push(i)
            col.push(j)
        }
    }
}

// Step 2: Set 0s for those rows and columns
for(let i = 0 ; i < matrix.length ; i++){
    for(let j = 0 ; j < matrix[i].length ; j++){
        if(row.includes(i) || col.includes(j)){
            matrix[i][j] = 0
        }
    }
}
console.log(matrix);
```

### Explanation

- **Pass 1:** Scan the entire matrix. Whenever a `0` is found, store its **row index** and **column index** separately.
- **Pass 2:** Go through the matrix again. If the current element's row or column exists in the stored lists → set it to `0`.

### Visual

```
Original:              0 found at (0,0) and (0,3)
0  1  2  0             row = [0], col = [0, 3]
3  4  5  2
1  3  1  5

After zeroing row 0 and columns 0, 3:
0  0  0  0     ← row 0 all zeroed
0  4  5  0     ← col 0 and col 3 zeroed
0  3  1  0     ← col 0 and col 3 zeroed
```

### Output

```
[ [ 0, 0, 0, 0 ], [ 0, 4, 5, 0 ], [ 0, 3, 1, 0 ] ]
```

> ⚠️ **Note:** `let copy = matrix` does NOT create a deep copy — both variables point to the same array. That line in the original code has no real effect. To deep copy use: `JSON.parse(JSON.stringify(matrix))`.

---

## Question 5 — How to Check if an Element Exists in a 2D Array?

```javascript
// Options:
// (i)   arr.includes(value)
// (ii)  arr.flat().includes(value)
// (iii) arr[0].includes(value)
// (iv)  arr.indexOf(value)
```

Let's test with:
```javascript
let arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
let value = 5
```

---

### ❌ Option (i) — `arr.includes(value)`

```javascript
arr.includes(5)  // false ❌
```

**Why it fails:** `arr` is an array of **sub-arrays**. `.includes()` checks if any element of `arr` strictly equals `5`. But the elements of `arr` are `[1,2,3]`, `[4,5,6]`, `[7,8,9]` — none of them IS the number `5`. So it always returns `false`.

---

### ✅ Option (ii) — `arr.flat().includes(value)`

```javascript
arr.flat().includes(5)  // true ✅
```

**Why it works:** `.flat()` converts `[[1,2,3],[4,5,6],[7,8,9]]` into `[1,2,3,4,5,6,7,8,9]` — a single 1D array. Then `.includes(5)` correctly finds `5`.

> ✅ **This is the correct and most reliable answer.**

---

### ❌ Option (iii) — `arr[0].includes(value)`

```javascript
arr[0].includes(5)  // false ❌
```

**Why it fails:** `arr[0]` is only the **first row** `[1, 2, 3]`. It only checks the first row, not the whole matrix. If `5` is in row 2, it will never be found.

---

### ❌ Option (iv) — `arr.indexOf(value)`

```javascript
arr.indexOf(5)  // -1 ❌
```

**Why it fails:** Just like `.includes()`, `.indexOf()` looks for `5` among the **top-level elements** of `arr`, which are arrays — not numbers. Since no sub-array `=== 5`, it returns `-1` (not found).

---

### ✅ Summary Table

| Option | Method | Checks | Works? |
|--------|--------|--------|--------|
| (i) | `arr.includes(value)` | Top-level elements (sub-arrays) | ❌ No |
| (ii) | `arr.flat().includes(value)` | All elements after flattening | ✅ **Yes** |
| (iii) | `arr[0].includes(value)` | Only the first row | ❌ No |
| (iv) | `arr.indexOf(value)` | Top-level elements (sub-arrays) | ❌ No |

### ✅ Correct Answer: **(ii) `arr.flat().includes(value)`**

---

> 💡 **Bonus Tip:** For very large matrices, you can also use `arr.some(row => row.includes(value))` — it short-circuits (stops early) as soon as the value is found, which is more efficient than flattening the entire array first.
