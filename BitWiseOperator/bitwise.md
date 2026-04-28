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


Yeh lo, seedha copy-paste karo apni `bitwise.md` mein:

---

```md
---

## Q9 — Swap Two Numbers using XOR (Bina Third Variable ke)

```javascript
function swapNumbers(a, b) {
    a = a ^ b
    b = a ^ b
    a = a ^ b
    return [a, b]
}
```

**Logic (XOR trick):**

XOR ki property hoti hai:
- `x ^ x = 0` (same value XOR karo → 0)
- `x ^ 0 = x` (kisi bhi value ko 0 se XOR karo → wahi value)

**Trace (a=5, b=9):**

```
5  =  0101
9  =  1001
```

| Step | Operation | a (binary) | b (binary) | a (decimal) | b (decimal) |
|------|-----------|-----------|-----------|-------------|-------------|
| Start | — | 0101 | 1001 | 5 | 9 |
| a = a^b | 0101^1001 | 1100 | 1001 | 12 | 9 |
| b = a^b | 1100^1001 | 1100 | 0101 | 12 | 5 |
| a = a^b | 1100^0101 | 1001 | 0101 | 9 | 5 |

**✅ Output: `[9, 5]`**

---

## Q10 — Check Even or Odd using Bitwise AND

```javascript
function checkEvenOrOdd(num) {
    if ((num & 1) == 0) {
        return 'Even'
    } else return 'Odd'
}
```

**Logic:**

Kisi bhi number ka **last bit** batata hai wo even hai ya odd:
- Last bit `0` → Even
- Last bit `1` → Odd

`num & 1` se sirf last bit check hoti hai:

```
4  =  100  →  4 & 1 = 000 = 0  →  Even
7  =  111  →  7 & 1 = 001 = 1  →  Odd
```

| num | Binary | num & 1 | Result |
|-----|--------|---------|--------|
|  4  |  100   |    0    |  Even  |
|  7  |  111   |    1    |  Odd   |

**✅ Output:**
- `checkEvenOrOdd(4)` → `Even`
- `checkEvenOrOdd(7)` → `Odd`

---

## Q11 — Power of Two Check using Bitwise AND

```javascript
function isPowerOfTwo(n) {
    if (n == 0) return false
    else if ((n & (n - 1)) == 0) return true
    else return false
}
```

**Logic:**

Power of 2 numbers binary mein aisa dikhte hain — sirf **ek** bit ON hoti hai:

```
1  =  0001
2  =  0010
4  =  0100
8  =  1000
```

Agar `n` power of 2 hai, to `n-1` ke saare bits neeche hote hain:

```
8    =  1000
8-1  =  0111
-----------
8 & 7 = 0000  →  0  ✅ Power of 2!

6    =  0110
6-1  =  0101
-----------
6 & 5 = 0100  →  4  ❌ Power of 2 nahi
```

**Trace:**

| n  | n-1 | n & (n-1) | Result |
|----|-----|-----------|--------|
|  0 |  —  |     —     | false (special case) |
|  1 |  0  |     0     | true  |
|  4 |  3  |     0     | true  |
|  6 |  5  |     4     | false |
| 16 | 15  |     0     | true  |

**✅ Output:**
- `isPowerOfTwo(0)`  → `false`
- `isPowerOfTwo(1)`  → `true`
- `isPowerOfTwo(4)`  → `true`
- `isPowerOfTwo(6)`  → `false`
- `isPowerOfTwo(16)` → `true`
```

---
---

## Q5 — factorial(n) : n ka Factorial calculate karo

```javascript
function factorial(n) {
    if(n == 0) return 1           // Base case: 0! = 1
    return n * (factorial(n-1))   // n! = n × (n-1)!
}
```

**Logic:** Factorial ka matlab hota hai `n × (n-1) × (n-2) × ... × 1`. Recursion mein iska matlab hai — current number ko chote version ke answer se multiply karo.

**Trace (n=5):**

```
factorial(5)
= 5 × factorial(4)
       = 4 × factorial(3)
              = 3 × factorial(2)
                     = 2 × factorial(1)
                            = 1 × factorial(0)
                                   = 1  ← BASE CASE (0! = 1)
                            = 1 × 1 = 1
                     = 2 × 1 = 2
              = 3 × 2 = 6
       = 4 × 6 = 24
= 5 × 24 = 120
```

**Stack + return values (n=5):**

```
PUSH phase:               POP phase (multiply karte hue wapas):
┌─────────────┐           factorial(0) → 1
│ factorial(0)│ ← TOP     factorial(1) → 1×1  = 1
│ factorial(1)│           factorial(2) → 2×1  = 2
│ factorial(2)│           factorial(3) → 3×2  = 6
│ factorial(3)│           factorial(4) → 4×6  = 24
│ factorial(4)│           factorial(5) → 5×24 = 120
│ factorial(5)│ ← BOTTOM
└─────────────┘
```

**Base case kyun `0! = 1` hai:**
Math mein `0!` ki value `1` define ki gayi hai — isliye base case `return 1` likhte hain `return 0` nahi.

**✅ Output:**
```
factorial(0) → 1
factorial(4) → 24
factorial(5) → 120
```

---

## Q6 — printFibonacci(n) : n terms tak Fibonacci print karo

```javascript
function printFibonacci(n) {
    let first = 0, second = 1

    if (n <= 0) {
        process.stdout.write('Invalid input')
    } else if (n == 1) {
        process.stdout.write(first + ' ')           // sirf 0
    } else {
        process.stdout.write(first + " " + second + " ")  // 0 1 print karo pehle
        function fibo(n, first, second) {
            if (n == 0) return                      // Base case
            let third = first + second              // agla term = pichle do ka sum
            process.stdout.write(third + " ")
            fibo((n - 1), second, third)            // shift karo — second bana first, third bana second
        }
        fibo((n - 2), first, second)               // (n-2) kyunki 2 terms pehle hi print ho gaye
    }
}
```

**Logic:** Fibonacci mein har term pichle do terms ka sum hota hai: `0, 1, 1, 2, 3, 5, 8...`

Yahan ek **inner recursive function `fibo()`** hai jo teen cheezein leta hai:
- `n` — kitne aur terms baaki hain
- `first` — pichla term
- `second` — pichhla pichhla term

Har call mein `third = first + second` calculate karo, print karo, aur phir `fibo(n-1, second, third)` — window ek aage khisak jaati hai.

**Trace (n=6):**

```
Pehle print: 0 1
fibo(4, 0, 1):
  third = 0+1 = 1 → print 1
  fibo(3, 1, 1):
    third = 1+1 = 2 → print 2
    fibo(2, 1, 2):
      third = 1+2 = 3 → print 3
      fibo(1, 2, 3):
        third = 2+3 = 5 → print 5
        fibo(0, 3, 5):
          n==0 → BASE CASE → return
```

**Sliding window concept:**

```
Step 1: first=0, second=1 → third=1
Step 2: first=1, second=1 → third=2
Step 3: first=1, second=2 → third=3
Step 4: first=2, second=3 → third=5
           ↑ har baar window ek aage khisak jaati hai
```

**✅ Output:**
```
printFibonacci(0) → Invalid input
printFibonacci(1) → 0
printFibonacci(6) → 0 1 1 2 3 5
```

---

## Q7 — reverseDigits(n) : Number ke digits ulte karo

```javascript
function reverseDigits(n) {
    if (n == 0) return 0
    let num = Math.abs(n)   // negative sign hata do pehle
    let str = ''

    function revN(num) {
        if (num == 0) {
            return (n < 0 ? Number('-' + str) : Number(str))  // sign wapas lagao
        }
        let r = num % 10        // last digit nikalo
        str += r                // string mein jodo
        return revN(Math.floor(num / 10))  // last digit hata ke call karo
    }
    return revN(num)
}
```

**Logic:** `%10` se last digit nikalte hain, string mein jodte jaate hain, phir `/10` se us digit ko hata ke agle call mein jaate hain.

**Trace (n=1234):**

```
revN(1234):
  r = 1234 % 10 = 4 → str = "4"
  return revN(123)
    r = 123 % 10 = 3 → str = "43"
    return revN(12)
      r = 12 % 10 = 2 → str = "432"
      return revN(1)
        r = 1 % 10 = 1 → str = "4321"
        return revN(0)
          num==0 → BASE CASE
          n>0 toh return Number("4321") = 4321
```

**Negative number handle kaise hota hai:**

```
n = -1234
num = Math.abs(-1234) = 1234   ← sirf digits pe kaam karo
str = "4321"                   ← same process
return Number('-' + "4321")    ← sign wapas lagao
      = -4321
```

**Edge case — trailing zeros:**
```
reverseDigits(100):
  str = "001"
  Number("001") = 1   ← JS automatically leading zeros hata deta hai
```

**Stack frames (n=1234):**

```
┌──────────────┐
│   revN(0)    │ ← TOP — BASE CASE, return 4321
│   revN(1)    │ ← str="4321"
│   revN(12)   │ ← str="432"
│   revN(123)  │ ← str="43"
│   revN(1234) │ ← BOTTOM — str="4"
└──────────────┘
```

**✅ Output:**
```
reverseDigits(1234)  → 4321
reverseDigits(-1234) → -4321
reverseDigits(100)   → 1
```

---

## Q8 — sumOfDigits(n) : Digits ka sum nikalo

```javascript
function sumOfDigits(n) {
    if(n == 0) return 0                          // Base case
    let r = n % 10                               // last digit nikalo
    return r + sumOfDigits(Math.floor(n / 10))  // usse add karo + baki ka sum
}
```

**Logic:** `%10` se last digit nikalte hain, usse add karte hain, phir `/10` karke last digit hata ke recursion karte hain.

**Trace (n=1234):**

```
sumOfDigits(1234)
= 4 + sumOfDigits(123)
       = 3 + sumOfDigits(12)
              = 2 + sumOfDigits(1)
                     = 1 + sumOfDigits(0)
                                = 0  ← BASE CASE
                     = 1 + 0 = 1
              = 2 + 1 = 3
       = 3 + 3 = 6
= 4 + 6 = 10
```

**Stack frames:**

```
PUSH:                    POP (add karte hue wapas):
┌──────────────────┐     sumOfDigits(0)    → 0
│ sumOfDigits(0)   │     sumOfDigits(1)    → 1+0  = 1
│ sumOfDigits(1)   │     sumOfDigits(12)   → 2+1  = 3
│ sumOfDigits(12)  │     sumOfDigits(123)  → 3+3  = 6
│ sumOfDigits(123) │     sumOfDigits(1234) → 4+6  = 10
│ sumOfDigits(1234)│ ← BOTTOM
└──────────────────┘
```

**Q4 (sumUpToN) se kya fark hai:**

| | sumUpToN(n) | sumOfDigits(n) |
|--|-------------|----------------|
| Kya add karta hai | n, n-1, n-2... (poora number) | last digit (n%10) |
| Chhota kaise karta hai | n-1 | Math.floor(n/10) |
| Base case | n==1 | n==0 |
| sumUpToN(4) | 4+3+2+1 = 10 | — |
| sumOfDigits(1234) | — | 1+2+3+4 = 10 |

**✅ Output:**
```
sumOfDigits(1234) → 10
sumOfDigits(999)  → 27
```