# ⏱️ Time & Space Complexity — Quick Revision

---

## 🔑 Basics First

| Notation | Name | Matlab |
|----------|------|--------|
| O(1) | Constant | Input chahे कितना भी बड़ा हो, time same रहती है |
| O(log n) | Logarithmic | Har step mein problem half hoti hai |
| O(n) | Linear | Input ke saath time बढ़ता है |
| O(n log n) | Linearithmic | Sorting algorithms mostly |
| O(n²) | Quadratic | Nested loops |
| O(2ⁿ) | Exponential | Recursion without memoization |

---

## 📌 Cases ka Matlab

| Case | Matlab | Example |
|------|--------|---------|
| **Best Case** Ω (Omega) | Sabse lucky situation | Element pehle index pe hi mil gaya |
| **Average Case** Θ (Theta) | Normal/typical situation | Element kahin beech mein hai |
| **Worst Case** O (Big-O) | Sabse bura scenario | Element last mein hai ya hai hi nahi |

> 💡 **Interviews mein hamesha Worst Case poochha jaata hai — O() notation.**

---

---

# 🧩 5 Questions — Guess the Complexity!

---

## Q1 — Seedha sawal

```javascript
function printFirst(arr) {
  console.log(arr[0]);
}
```

<details>
<summary>💡 Answer dekhne ke liye click karo</summary>

### ✅ Time: O(1) — Constant

**Kyun?**
Array kitna bhi bada ho — hamesha sirf **pehla element** access karta hai.
Koi loop nahi, koi condition nahi.

| Case | Complexity |
|------|-----------|
| Best Case | O(1) |
| Average Case | O(1) |
| Worst Case | **O(1)** |

> Index se direct access = hamesha O(1)

</details>

---

## Q2 — Ek loop

```javascript
function findElement(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) return i;
  }
  return -1;
}
```

<details>
<summary>💡 Answer dekhne ke liye click karo</summary>

### ✅ Time: O(n) — Linear

**Kyun?**
Har element ek baar check ho sakta hai.

| Case | Complexity | Situation |
|------|-----------|-----------|
| Best Case Ω | **O(1)** | Target pehle index pe hi hai |
| Average Case Θ | **O(n/2) → O(n)** | Target beech mein hai |
| Worst Case O | **O(n)** | Target last pe hai ya hai hi nahi |

> Interview mein bolna: **"Worst case O(n) hai"**

</details>

---

## Q3 — Nested loop

```javascript
function printPairs(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      console.log(arr[i], arr[j]);
    }
  }
}
```

<details>
<summary>💡 Answer dekhne ke liye click karo</summary>

### ✅ Time: O(n²) — Quadratic

**Kyun?**
Outer loop → n baar chalta hai
Inner loop → har baar phir n baar chalta hai
Total = n × n = **n²**

| Case | Complexity |
|------|-----------|
| Best Case | O(n²) |
| Average Case | O(n²) |
| Worst Case | **O(n²)** |

> Jab bhi **loop ke andar loop** ho same array pe — O(n²) socho pehle.

**Space Complexity: O(1)** — koi extra array nahi banayi

</details>

---

## Q4 — Recursion wala (Tricky!) 🔥

```javascript
function binarySearch(arr, target, low, high) {
  if (low > high) return -1;

  let mid = Math.floor((low + high) / 2);

  if (arr[mid] === target) return mid;
  else if (arr[mid] < target) return binarySearch(arr, target, mid + 1, high);
  else return binarySearch(arr, target, low, mid - 1);
}
```

<details>
<summary>💡 Answer dekhne ke liye click karo</summary>

### ✅ Time: O(log n) — Logarithmic

**Kyun?**
Har recursive call mein array **half** ho jaata hai.

```
n=8  →  4  →  2  →  1   (sirf 3 steps!)
n=16 →  8  →  4  →  2  →  1  (sirf 4 steps!)
```

| Case | Complexity | Situation |
|------|-----------|-----------|
| Best Case Ω | **O(1)** | Target pehli baar mid pe hi mila |
| Average Case Θ | **O(log n)** | Kuch steps baad mila |
| Worst Case O | **O(log n)** | Last tak dhundna pada |

**Space Complexity: O(log n)** — recursion ka call stack banta hai

> Array sort hona chahiye Binary Search ke liye!

</details>

---

## Q5 — Space Complexity wala (Most Ignored Topic!) 🧠

```javascript
function doubleArray(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(arr[i] * 2);
  }
  return result;
}
```

<details>
<summary>💡 Answer dekhne ke liye click karo</summary>

### ✅ Time: O(n) | Space: O(n)

**Time kyun O(n)?**
Loop ek baar chalta hai — n elements ke liye = O(n)

**Space kyun O(n)?**
`result[]` naam ki **nayi array** bana rahe ho — jisme n elements jayenge.
Input jitna bada, utni badi nayi array.

| | Complexity | Reason |
|-|-----------|--------|
| Time | O(n) | Ek loop, n elements |
| Space | **O(n)** | Nayi array of size n bani |

> Agar `result = []` ki jagah same `arr` modify karte (in-place), toh Space **O(1)** hota!

</details>

---

---

## 🧠 Quick Trick — Complexity Pehchano

```
Direct access (arr[i])          → O(1)
Ek loop                         → O(n)
Loop ke andar loop              → O(n²)
Har step mein half hota ho      → O(log n)
Loop + andar bhi log n kaam     → O(n log n)
Recursion (without memo)        → O(2ⁿ)  ← Dangerous!
```

---

## 📊 Complexity Order (Slow → Fast growing)

```
O(1) < O(log n) < O(n) < O(n log n) < O(n²) < O(2ⁿ)

BEST ✅                                          WORST ❌
```

---

> 💬 **Yaad rakhne ka shortcut:**
> - **1 loop** → O(n)
> - **2 nested loops** → O(n²)
> - **Half karo har baar** → O(log n)
> - **Extra array banao** → Space O(n)
> - **In-place karo** → Space O(1)

---

---

# 🚨 TLE (Time Limit Exceeded) — Kab aata hai?

> Competitive programming / DSA mein judge **1 second mein ~10⁸ (10 crore) operations** allow karta hai.
> Isse zyada gaya → **TLE ❌**

---

## 📏 Input Size dekho, Complexity choose karo

| Input Size (n) | Safe Complexity | TLE hoga agar |
|---------------|----------------|---------------|
| n ≤ 10 | O(n!) , O(2ⁿ) bhi chalega | — |
| n ≤ 20 | O(2ⁿ) | O(n!) pe TLE |
| n ≤ 500 | O(n²) | O(n³) pe TLE |
| n ≤ 5,000 | O(n²) | O(n² log n) pe TLE |
| n ≤ 10⁵ (1 lakh) | O(n log n) | O(n²) pe **TLE ❌** |
| n ≤ 10⁶ (10 lakh) | O(n) | O(n log n) bhi slow ho sakta |
| n ≤ 10⁸ (10 crore) | O(1) , O(log n) | O(n) pe bhi TLE |

---

## 🔥 Real Examples — JavaScript mein

### ❌ TLE wala code (n = 100,000)

```javascript
// n = 100,000 → O(n²) = 10 BILLION operations → TLE ❌
function hasDuplicate(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) return true;
    }
  }
  return false;
}
```

```
n = 100,000
Operations = 100,000² / 2 = 5,000,000,000 (500 crore)
Limit = 10 crore
Result = TLE ❌
```

### ✅ Fast wala code (same problem, O(n))

```javascript
// n = 100,000 → O(n) = 1 lakh operations → AC ✅
function hasDuplicate(arr) {
  let seen = new Set();
  for (let i = 0; i < arr.length; i++) {
    if (seen.has(arr[i])) return true;
    seen.add(arr[i]);
  }
  return false;
}
```

```
n = 100,000
Operations = 100,000
Limit = 10 crore
Result = Accepted ✅
```

---

## 📊 Visual — n badhne pe operations kitne badhte hain

```
n = 1,000 ke liye:

O(log n)  →           10  operations  ✅✅✅
O(n)      →        1,000  operations  ✅✅
O(n log n)→       10,000  operations  ✅
O(n²)     →    1,000,000  operations  ⚠️  (borderline)
O(2ⁿ)     →  10^301       operations  ❌❌❌ NEVER
```

```
n = 100,000 ke liye:

O(log n)  →           17  operations  ✅✅✅
O(n)      →      100,000  operations  ✅✅
O(n log n)→    1,700,000  operations  ✅
O(n²)     → 10,000,000,000 operations ❌ TLE
```

---

## 🧠 TLE se bachne ka Formula

```
Step 1: n (input size) dekho — constraints mein diya hota hai
Step 2: Table se safe complexity nikalo
Step 3: Apna solution ka complexity calculate karo
Step 4: Safe hai? → Submit | Nahi? → Optimize karo
```

### Quick Decision Chart:

```
n ≤ 20        →  Recursion / Brute Force bhi chalega
n ≤ 1,000     →  O(n²) safe hai
n ≤ 100,000   →  O(n log n) chahiye (Sorting, Binary Search)
n ≤ 1,000,000 →  O(n) chahiye (Single loop, HashMap)
n > 10,000,000 → O(log n) ya O(1) hi bachayega
```

---

> ⚡ **Golden Rule:**
> Jab bhi problem mein `n ≤ 10⁵` ya usse bada dikh jaye —
> **nested loop mat lagana** — warna TLE pakka hai! 🚫

---

---

# 🎯 Constraints dekh ke Algorithm choose karo

> Problem mein **Constraints** section hota hai jaise:
> `1 ≤ n ≤ 10⁹` — yahi batata hai ki tumhara solution kitna fast hona chahiye.

---

## 🔴 n ≤ 10¹² (1 Trillion — 1 lakh crore)

```
10¹² = 1,000,000,000,000
```

**Allowed:** O(log n) ya O(1) SIRF

| Approach | Operations | Result |
|----------|-----------|--------|
| O(1) | 1 | ✅ Instant |
| O(log n) | ~40 | ✅ Blazing fast |
| O(√n) | ~10,00,000 | ⚠️ Borderline |
| O(n) | 1,000,000,000,000 | ❌ TLE — impossible |

**Kya socho:** Direct formula hai kya? Math se solve hoga?

```javascript
// Example: 1 se n tak sum — O(1) formula
// n = 10^12 bhi ho toh bhi 1 operation!
function sumUptoN(n) {
  return (n * (n + 1)) / 2;  // O(1) ✅
}

// Loop lagaya toh? — TLE ❌
function sumLoop(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) sum += i; // O(n) — 10^12 iterations ❌
  return sum;
}
```

**Real problems:** Number theory, Math formulas, GCD/LCM, Power functions

---

## 🟠 n ≤ 10⁹ (1 Billion — 1 Arab)

```
10⁹ = 1,000,000,000
```

**Allowed:** O(log n) ya O(√n) tak

| Approach | Operations | Result |
|----------|-----------|--------|
| O(log n) | ~30 | ✅ Perfect |
| O(√n) | ~31,623 | ✅ Chalega |
| O(n log n) | ~30 crore | ❌ TLE |
| O(n) | 100 crore | ❌ TLE (borderline, mostly fail) |

**Kya socho:** Binary Search lagega kya? Koi pattern hai jo √n mein solve ho?

```javascript
// Example: Kya n ek perfect square hai? — O(√n)
// n = 10^9 bhi ho toh ~31,623 operations ✅
function isPerfectSquare(n) {
  for (let i = 1; i * i <= n; i++) {  // O(√n) ✅
    if (i * i === n) return true;
  }
  return false;
}

// Binary Search — O(log n) ✅
function binarySearch(arr, target) {
  let lo = 0, hi = arr.length - 1;
  while (lo <= hi) {
    let mid = Math.floor((lo + hi) / 2);
    if (arr[mid] === target) return mid;
    else if (arr[mid] < target) lo = mid + 1;
    else hi = mid - 1;
  }
  return -1;
}
```

**Real problems:** Binary Search on answer, Prime checking, Fast exponentiation

---

## 🟡 n ≤ 10⁷ (1 Crore)

```
10⁷ = 10,000,000
```

**Allowed:** O(n) comfortable, O(n log n) tight

| Approach | Operations | Result |
|----------|-----------|--------|
| O(n) | 1 crore | ✅ Fast |
| O(n log n) | ~2.3 crore | ✅ Chalega (tight) |
| O(n²) | 100 trillion | ❌ TLE — never |

**Kya socho:** Single loop chalega? Prefix sum? Sliding window?

```javascript
// Example: Array ka max sum subarray — O(n) Kadane's Algorithm
// n = 10^7 → 1 crore operations → ✅
function maxSubarraySum(arr) {
  let maxSum = arr[0];
  let curr = arr[0];
  for (let i = 1; i < arr.length; i++) {  // O(n) ✅
    curr = Math.max(arr[i], curr + arr[i]);
    maxSum = Math.max(maxSum, curr);
  }
  return maxSum;
}
```

**Real problems:** Prefix sum, Two pointers, Sliding window, Hashing

---

## 🟢 n ≤ 10⁵ (1 Lakh) — Most Common in DSA!

```
10⁵ = 100,000
```

**Allowed:** O(n log n) sweet spot — sorting, trees, heaps

| Approach | Operations | Result |
|----------|-----------|--------|
| O(n log n) | ~17 lakh | ✅ Perfect |
| O(n) | 1 lakh | ✅ Even better |
| O(n²) | 10 arab | ❌ TLE — classic mistake |

**Kya socho:** Sort karna padega? BST/Heap use hoga? Merge sort level kaam?

```javascript
// Example: Array sort karke duplicates hatao — O(n log n)
function removeDuplicates(arr) {
  return [...new Set(arr)].sort((a, b) => a - b);  // O(n log n) ✅
}

// ❌ Yeh mat karo — O(n²)
function removeDupSlow(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {          // O(n²) ❌
    if (!result.includes(arr[i])) result.push(arr[i]);
  }
  return result;
}
```

**Real problems:** Sorting, Binary Search, Segment Trees, Priority Queue

---

## 🔵 n ≤ 10³ (1 Thousand) — Chhota input

```
10³ = 1,000
```

**Allowed:** O(n²) aaram se, O(n³) bhi try kar sakte ho

| Approach | Operations | Result |
|----------|-----------|--------|
| O(n²) | 10 lakh | ✅ Comfortable |
| O(n³) | 100 crore | ⚠️ Borderline |
| O(2ⁿ) | 2^1000 | ❌ Never |

```javascript
// Example: Bubble Sort — O(n²) — n=1000 pe chalega ✅
function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++)
    for (let j = 0; j < arr.length - i - 1; j++)
      if (arr[j] > arr[j+1]) [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
  return arr;
}
```

---

## 📌 Master Table — Ek Jagah Sab Kuch

```
╔══════════════╦══════════════════════════╦══════════════════╗
║  Constraint  ║     Use This             ║  Avoid This      ║
╠══════════════╬══════════════════════════╬══════════════════╣
║  n ≤ 10¹²   ║  O(1), O(log n)          ║  O(n) bhi nahi   ║
║  n ≤ 10⁹    ║  O(log n), O(√n)         ║  O(n) mostly     ║
║  n ≤ 10⁷    ║  O(n), O(n log n) tight  ║  O(n²)           ║
║  n ≤ 10⁵    ║  O(n log n), O(n)        ║  O(n²)           ║
║  n ≤ 10³    ║  O(n²), O(n³) try kar    ║  O(2ⁿ)           ║
║  n ≤ 20     ║  O(2ⁿ) bhi chalega       ║  O(n!)           ║
╚══════════════╩══════════════════════════╩══════════════════╝
```

---

