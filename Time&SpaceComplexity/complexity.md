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
