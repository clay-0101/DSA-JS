# Bitwise Operators — Complete Guide

---

## Bitwise Operators kya hote hain?

Bitwise operators seedha **binary bits** pe kaam karte hain. Ye numbers ko binary (0s aur 1s) mein dekh ke operation karte hain.

---

## 1. Bitwise AND (`&`)

**Kaam kaise karta hai:** Dono bits **1** ho tabhi result **1** hoga, warna **0**.

| Bit A | Bit B | A & B |
|-------|-------|-------|
|   1   |   1   |   1   |
|   1   |   0   |   0   |
|   0   |   1   |   0   |
|   0   |   0   |   0   |

**Example:**
```
  5  =  0101
  3  =  0011
-----------
5&3 =  0001  →  1
```

**Use:** Kisi bit ko check karna ya mask lagana. Jaise `(num & 1)` se pata chalta hai number odd hai ya even.

---

## 2. Bitwise OR (`|`)

**Kaam kaise karta hai:** Koi bhi ek bit **1** ho to result **1** hoga.

| Bit A | Bit B | A \| B |
|-------|-------|--------|
|   1   |   1   |   1    |
|   1   |   0   |   1    |
|   0   |   1   |   1    |
|   0   |   0   |   0    |

**Example:**
```
  5  =  0101
  3  =  0011
-----------
5|3 =  0111  →  7
```

**Use:** Kisi bit ko **ON** karna (set karna).

---

## 3. Bitwise XOR (`^`)

**Kaam kaise karta hai:** Dono bits **alag** ho tabhi **1**, same ho to **0**.

| Bit A | Bit B | A ^ B |
|-------|-------|-------|
|   1   |   1   |   0   |
|   1   |   0   |   1   |
|   0   |   1   |   1   |
|   0   |   0   |   0   |

**Example:**
```
  5  =  0101
  3  =  0011
-----------
5^3 =  0110  →  6
```

**Use:** Do numbers swap karna bina third variable ke. Pata karna dono values same hain ya nahi.

---

## 4. Bitwise NOT (`~`)

**Kaam kaise karta hai:** Har bit ko **ulta** kar deta hai — 0 ko 1, 1 ko 0.

**Example:**
```
  5  =  00000101
 ~5  =  11111010  →  -6  (2's complement mein)
```

**Rule:** `~n = -(n+1)` hamesha.

**Use:** 2's complement calculate karna, masking operations.

---

## 5. Right Shift (`>>`)

**Kaam kaise karta hai:** Sare bits ko **dayi taraf** khiskaata hai. Har ek shift = **2 se divide** karna (integer).

**Example:**
```
 16  =  10000
 16 >> 1  =  01000  →  8
 16 >> 2  =  00100  →  4
```

**Use:** Fast division by 2. Loop mein bits check karna (agle question mein dekho).

---

## 6. Left Shift (`<<`)

**Kaam kaise karta hai:** Sare bits ko **bayi taraf** khiskaata hai. Har ek shift = **2 se multiply** karna.

**Example:**
```
  3  =  00011
  3 << 1  =  00110  →  6
  3 << 2  =  01100  →  12
```

**Use:** Fast multiplication by 2. Powers of 2 banana.

---

---

# Questions — Trace & Output

---

## Q1 — Trailing Zeros in Binary (Bit Position Finder)

```
count = 0, num = 64
While (num != 0)
    If ( (num & 1) == 1 )
        Jump out of loop
    Else
        count = count + 1
        num = num >> 1
    End If
End While
Print count
```

**Trace:**

`64` binary mein = `1000000`

| Iteration | num (binary) | num & 1 | count |
|-----------|-------------|---------|-------|
|     1     | 1000000     |    0    |   1   |
|     2     |  100000     |    0    |   2   |
|     3     |   10000     |    0    |   3   |
|     4     |    1000     |    0    |   4   |
|     5     |     100     |    0    |   5   |
|     6     |      10     |    0    |   6   |
|     7     |       1     |    1    |  loop tod do |

**Explanation:** `num >> 1` har baar number ko 2 se divide karta hai. `num & 1` check karta hai last bit 1 hai ya nahi. 64 = 2^6, toh 6 right shifts ke baad pehli baar 1 milti hai.

**✅ Output: `6`**

---

## Q2 — Arithmetic with Conditionals

```
Input: p = 9, w = 6
p = p + 1      → p = 10
w = w - 1      → w = 5
p = p + w      → p = 15
if (p > w)     → 15 > 5  ✓ TRUE
    print p
else
    print w
```

**Trace:**

| Step | p  | w  |
|------|----|----|
| Start | 9 | 6 |
| p+1  | 10 | 6 |
| w-1  | 10 | 5 |
| p+w  | 15 | 5 |

15 > 5 → TRUE → p print hoga.

**✅ Output: `15`**

---

## Q3 — For Loop with Accumulator

```javascript
let t = 6;
let h = 9;
let x = 0;
let c;

if (h > t) {             // 9 > 6 → TRUE
    for (c = t; c < h; c = c + 1) {
        x = x + c;       // x = 6+7+8
    }
    console.log(x);
} else {
    console.log("error");
    console.log(x);
}
```

**Trace:**

| c | x = x + c |
|---|-----------|
| 6 | 0 + 6 = 6 |
| 7 | 6 + 7 = 13|
| 8 | 13 + 8 = 21|
| 9 | loop khatam (9 < 9 false) |

**✅ Output: `21`**

---

## Q4 — Octal Conversion Function + Nested Loop

```javascript
function sample(n) {
    let i = 0;
    let s = 0;
    while (n > 0) {
        let r = n % 10;
        let p = Math.pow(8, i);
        s = s + p * r;
        i = i + 1;
        n = Math.floor(n / 10);
    }
    return s;
}
// sample() octal ko decimal mein convert karta hai

let k = 8;
for (let i = 1; i <= 1; i++) {       // i=1, 1<=1 true, sirf ek baar
    for (let j = i; j <= 1; j++) {   // j=1, 1<=1 true, sirf ek baar
        console.log(k + 1);           // 8 + 1 = 9
    }
}
```

**Trace:** Dono loops sirf **ek ek baar** chalte hain kyunki condition `<= 1` hai aur start bhi `1` se hai.

**✅ Output: `9`**

---

## Q5 — Conditional on Variable `a`

```javascript
if (a % 10 === 0) {
    a = a * 2;
} else if (a % 5 === 0) {
    a = a / 5;
} else {
    a = a - 1;
}
console.log(a, b);
```

> ⚠️ **Note:** Is snippet mein `a` aur `b` ki initial value **nahi di gayi** hai. Output `a` ki value pe depend karta hai:

| a ki value | Condition | Result |
|------------|-----------|--------|
| 10, 20, 30... | a % 10 === 0 | a = a * 2 |
| 5, 15, 25... | a % 5 === 0 | a = a / 5 |
| Baaki sab | else | a = a - 1 |

`b` ki value bhi define nahi, toh `console.log(a, b)` mein `b` → `undefined` aayega jab tak pehle koi value assign na ho.

---

## Q6 — Loop with Break

```javascript
let a = 0;
let b;
for (let i = 0; i <= 4; i++) {
    a = a + 1;
    if (i === 3) {
        console.log("Hello");
        break;
    }
}
console.log(a);
```

**Trace:**

| i | a = a+1 | i === 3? |
|---|---------|----------|
| 0 |    1    |    No    |
| 1 |    2    |    No    |
| 2 |    3    |    No    |
| 3 |    4    | **Yes → "Hello" print, BREAK** |

Loop `i=3` pe break karta hai. `a` is waqt **4** hai.

**✅ Output:**
```
Hello
4
```

---

## Q7 — Nested While Loop

```javascript
let a = 5;
let b = 6;
let c;
let v = 90;

while (v > 8) {
    a = a + v;
    c = (a + b) % 10;
    while (c > 9) {
        b = b - a;
        c = c - 1;
    }
    v = Math.floor(v / 2);
}
console.log(b, c);
```

**Trace (outer loop):**

| Step | v  | a = a+v | c = (a+b)%10 | Inner loop chala? | v = v/2 |
|------|----|---------|--------------|-------------------|---------|
|  1   | 90 |  5+90=95   | (95+6)%10 = 1  | No (1 > 9 false)   |  45     |
|  2   | 45 |  95+45=140 | (140+6)%10 = 6 | No (6 > 9 false)   |  22     |
|  3   | 22 | 140+22=162 | (162+6)%10 = 8 | No (8 > 9 false)   |  11     |
|  4   | 11 | 162+11=173 | (173+6)%10 = 9 | No (9 > 9 false)   |   5     |
|  5   |  5 | loop khatam (5 > 8 false) | — | — | — |

`b` kabhi change nahi hua (inner loop kabhi nahi chala), toh `b = 6`.
`c` last value = **9**.

**✅ Output: `6 9`**

---

## Q8 — Array with Bitwise Operators

```javascript
let arr = [2, 3, 3, 4];

arr[2] = (6 + 7) + arr[3];   // arr[2] = 13 + 4 = 17
// arr = [2, 3, 17, 4]

// Check: (1 + 7 + arr[0]) < (7 ^ arr[1])
// = (1 + 7 + 2) < (7 ^ 3)
// = 10 < 4  → FALSE
// XOR: 7 = 0111, 3 = 0011 → 7^3 = 0100 = 4

if ((1 + 7 + arr[0]) < (7 ^ arr[1])) {
    arr[1] = arr[3] + arr[0];
} else {
    arr[3] = arr[2] + arr[1] + arr[1];  // ✅ Ye chalega
    // arr[3] = 17 + 3 + 3 = 23
}
// arr = [2, 3, 17, 23]

// Check: (arr[3] + arr[0]) > (arr[0] - arr[3])
// = (23 + 2) > (2 - 23)
// = 25 > -21  → TRUE

if ((arr[3] + arr[0]) > (arr[0] - arr[3])) {
    arr[3] = (10 & 8) + arr[2];
    // 10 & 8 = 1010 & 1000 = 1000 = 8
    // arr[3] = 8 + 17 = 25
}
// arr = [2, 3, 17, 25]

console.log(arr[1] + arr[2] + arr[3]);
// = 3 + 17 + 25 = 45
```

**XOR aur AND ka breakdown:**

```
7 ^ arr[1]:    7 = 0111
              3 = 0011
             --------
           7^3 = 0100 = 4

10 & 8:   10 = 1010
           8 = 1000
          --------
        10&8 = 1000 = 8
```

**Final Array:** `[2, 3, 17, 25]`

**✅ Output: `45`**

---

## Quick Summary Table

| Operator | Symbol | Rule | Example |
|----------|--------|------|---------|
| AND      |  `&`   | Dono 1 ho tabhi 1 | `5 & 3 = 1` |
| OR       |  `\|`  | Koi ek 1 ho to 1 | `5 \| 3 = 7` |
| XOR      |  `^`   | Alag ho to 1 | `5 ^ 3 = 6` |
| NOT      |  `~`   | Bits ulte karo | `~5 = -6` |
| Right Shift | `>>` | 2 se divide | `16 >> 1 = 8` |
| Left Shift  | `<<` | 2 se multiply | `3 << 1 = 6` |
