# 📦 Multi-Dimensional Arrays in JavaScript
> **Hinglish me samjhao, code ke saath!**

---

## ⚠️ Problem: `new Array().fill()` se 2D Array mat banao

```javascript
// ❌ GALAT TARIKA — Yeh mat karo!
let arr = new Array(2).fill(new Array(2).fill(0))
console.log(arr);
arr[0][0] = 5
console.log(arr)
```

### 🖥️ Output:
```
[ [ 0, 0 ], [ 0, 0 ] ]   // pehle
[ [ 5, 0 ], [ 5, 0 ] ]   // baad mein — DONO rows change ho gayi!
```

### 🤔 Kyun Aisa Hua?
Jab tum `.fill(new Array(2).fill(0))` karte ho, toh **ek hi array object** dono rows mein fill ho jaata hai — matlab dono rows **same memory location** point kar rahi hain. Ek row change karo, dono change ho jaati hain. Ye reference sharing ka issue hai.

---

## ✅ Sahi Tarika: `Array.from()` use karo

```javascript
// ✅ SAHI TARIKA
let arr = Array.from({length : 2}, () => new Array(2).fill(0))
console.log(arr);
arr[0][0] = 5
console.log(arr)
```

### 🖥️ Output:
```
[ [ 0, 0 ], [ 0, 0 ] ]   // pehle
[ [ 5, 0 ], [ 0, 0 ] ]   // baad mein — sirf row[0] change hui ✅
```

### 🤔 Kyun Yeh Sahi Hai?
`Array.from()` mein jo arrow function `() => new Array(2).fill(0)` hai, woh **har row ke liye naya array banata hai** — matlab har row ka apna alag memory location hota hai. Isliye ek row change karne se doosri affect nahi hoti.

---

## 🎮 User Input se 2D Matrix banana

```javascript
let prompt = require('prompt-sync')()
let matrix = new Array(3)

// Step 1: Har row ko initialize karo
for(let i = 0 ; i < matrix.length; i++){
    matrix[i] = new Array(3)
}

// Step 2: User se values lo
for(let i = 0 ; i < matrix.length; i++){
    for(let j = 0 ; j < matrix[i].length; j++){
        let value = Number(prompt(`Enter the Value of ${i}th row of ${j}th index `))
        matrix[i][j] = value
    }
}

// Step 3: Matrix print karo
for(let i = 0 ; i < matrix.length; i++){
    for(let j = 0 ; j < matrix[i].length; j++){
        process.stdout.write(matrix[i][j] + ' ')
    }
    console.log()
}
```

### 🖥️ Example Output (agar 1-9 enter karo):
```
1 2 3
4 5 6
7 8 9
```

### 🔍 Flow Samjho:
- Pehle ek **1D array of size 3** banaya (`matrix`)
- Phir **har index pe ek aur 1D array** daal diya (size 3)
- Ab yeh ban gaya → **3 rows × 3 columns = 9 elements ka grid**

---

## 🧊 3D Array — Layers ka concept

```javascript
// 3D Array: [2 layers][3 rows][3 columns]
let array3D = [
  [[0,0,0], [0,0,0], [0,0,0]], // Layer 0
  [[1,1,1], [1,1,1], [1,1,1]]  // Layer 1
];
```

### 📊 Visualization:

```
Layer 0 (z=0):          Layer 1 (z=1):
┌─────────────┐         ┌─────────────┐
│  0   0   0  │         │  1   1   1  │
│  0   0   0  │         │  1   1   1  │
│  0   0   0  │         │  1   1   1  │
└─────────────┘         └─────────────┘
```

**Real Life Example:** Sochlo ek **building** hai jisme 2 floors hain, aur har floor pe 3×3 ka room grid hai. Layer = Floor, Row = Room row, Column = Room column.

- `array3D[0]` → Puri pehli layer (Floor 0)
- `array3D[0][1]` → Floor 0 ki row 1
- `array3D[0][1][2]` → Floor 0, row 1, column 2 ka element

---

## 🌌 4D Array — Groups of 3D Arrays

```javascript
// 4D Array: [2 groups][2 layers][3 rows][3 columns]
let array4D = [
  array3D, // Group 0 (Pura 3D array)
  array3D  // Group 1 (Ek aur 3D array)
];
```

### 📊 Visualization:

```
Group 0                     Group 1
├── Layer 0 (z=0)           ├── Layer 0 (z=0)
│   ┌───────────┐           │   ┌───────────┐
│   │ 0  0  0   │           │   │ 0  0  0   │
│   │ 0  0  0   │           │   │ 0  0  0   │
│   │ 0  0  0   │           │   │ 0  0  0   │
│   └───────────┘           │   └───────────┘
└── Layer 1 (z=1)           └── Layer 1 (z=1)
    ┌───────────┐               ┌───────────┐
    │ 1  1  1   │               │ 1  1  1   │
    │ 1  1  1   │               │ 1  1  1   │
    │ 1  1  1   │               │ 1  1  1   │
    └───────────┘               └───────────┘
```

**Real Life Example:** Imagine karo **2 cities**, har city mein **2 buildings**, har building mein **3 floors**, aur har floor pe **3 rooms**:
- `array4D[city][building][floor][room]`

- `array4D[0]` → Poori pehli city (Group 0)
- `array4D[0][1]` → City 0 ki Building 1 (Layer 1)
- `array4D[0][1][2]` → City 0, Building 1, Floor 2
- `array4D[0][1][2][0]` → City 0, Building 1, Floor 2, Room 0 ka element

---

## 🪢 Jagged Array — Har row ki alag length

```javascript
let prompt = require('prompt-sync')()
let matrix = new Array(4)

// Step 1: Har row ki length user se lo
for(let i = 0 ; i < matrix.length; i++){
    let len = Number(prompt(`Enter ${i}th row length`))
    matrix[i] = new Array(len)
}

// Step 2: Values fill karo
for(let i = 0 ; i < matrix.length; i++){
    for(let j = 0 ; j < matrix[i].length; j++){
        let value = Number(prompt(`Enter the Value of ${i}th row of ${j}th index `))
        matrix[i][j] = value
    }
}

// Step 3: Print karo
for(let i = 0 ; i < matrix.length; i++){
    for(let j = 0 ; j < matrix[i].length; j++){
        process.stdout.write(matrix[i][j] + ' ')
    }
    console.log()
}
```

### 🖥️ Example Output (agar rows lengths 2, 4, 1, 3 dein):
```
1 2
3 4 5 6
7
8 9 10
```

### 📊 Visualization:
```
Row 0: [ 1, 2 ]              ← length 2
Row 1: [ 3, 4, 5, 6 ]        ← length 4
Row 2: [ 7 ]                  ← length 1
Row 3: [ 8, 9, 10 ]          ← length 3
```

### 🔍 Jagged vs Normal 2D:
| Feature | Normal 2D | Jagged Array |
|---|---|---|
| Har row ki length | Same | Alag alag |
| Memory | Thoda zyada (fixed) | Efficient |
| Example | Chess board | Triangle pattern |

> **Normal 2D** = sab rows same size (rectangle shape)
> **Jagged** = har row ki apni marzi ki size (seedhi nahi, isliye "jagged" = ulti-seedhi)

---

## 🧠 Quick Summary

```
1D Array   →  [a, b, c]                          → List
2D Array   →  [[a,b], [c,d]]                     → Grid / Matrix
3D Array   →  [[[a,b],[c,d]], [[e,f],[g,h]]]     → Layers of Grids
4D Array   →  [3Darr1, 3Darr2, ...]              → Groups of Layers
Jagged     →  [[a,b], [c], [d,e,f]]              → Uneven Grid
```

---

> 💡 **Pro Tip:** Jitni bhi dimensions ho, access karna same hi rehta hai — bas ek aur `[index]` add karte jao!
> `arr[0]` → `arr[0][0]` → `arr[0][0][0]` → `arr[0][0][0][0]` ...
