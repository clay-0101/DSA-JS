# JavaScript Core Concepts & Math Object Methods

> 📚 A comprehensive guide for interview preparation and quick reference

---

## Part 1: JavaScript Scope Chain & Implicit Global Variables

### Code Example
```javascript
a = 10 
console.log(a);  // Output: 10
```

### 🔍 1. Engine ka Search (Scope Chain)

**Interview Answer:**
> "Jab hum `a = 10` likhte hain, toh JavaScript engine sabse pehle use **Local Scope** mein dhoondta hai. Jab use wahan koi declaration (`let`, `var`, ya `const`) nahi milti, toh wo **Scope Chain** ke zariye upar jata hai aur **Global Scope** tak check karta hai."

#### Scope Chain Flow:
```
Local Scope → Parent Scope → Global Scope → Global Object (window)
     ↑              ↑              ↑              ↑
   Pehle         Phir           Phir           Last
```

**Key Points:**
- Engine pehle current scope mein dekhta hai
- Nahi mila toh outer scope mein jaata hai
- Ye chain tab tak continue hoti hai jab tak Global Scope na aa jaye
- Agar kahin bhi declaration nahi milta → **Implicit Global** ban jaata hai

---

### 🌍 2. Implicit Global Creation

**Interview Answer:**
> "Agar Global Scope mein bhi wo variable nahi milta, toh JavaScript engine error dene ki bajaye **khud se** us variable ko **Global Object (window object)** ki ek property bana deta hai. Is process ko **Implicit Global Variable** banana kehte hain."

#### Behind The Scenes:
```javascript
a = 10;
// JavaScript Engine internally does:
// window.a = 10;  (in browsers)
// global.a = 10;  (in Node.js)
```

#### Example:
```javascript
function test() {
    x = 100;  // No declaration!
}
test();
console.log(window.x);  // 100 (browser mein)
console.log(global.x);  // 100 (Node.js mein)
```

⚠️ **Warning:** Ye feature **"strict mode"** mein kaam nahi karta!
```javascript
"use strict";
function test() {
    y = 200;  // ❌ ReferenceError: y is not defined
}
```

---

### 💡 3. Kyun Possible Hai? (The 'Why')

**Interview Answer:**
> "Ye isliye possible hai kyunki JavaScript ka default behavior thoda **'forgiving'** (maaf karne wala) hai. Wo **purane code (legacy code)** ko support karne ke liye bina declaration ke variables allow kar deta hai."

#### Historical Context:
- JavaScript 1995 mein bani thi (10 din mein!)
- Beginner-friendly banani thi
- Purane websites break na hon - isliye backward compatibility
- **ES5 (2009)** mein `"use strict"` introduce hua to prevent this

#### Best Practice:
```javascript
// ❌ Bad Practice
x = 10;

// ✅ Good Practice
let x = 10;
const y = 20;
var z = 30;  // Old style, avoid if possible
```

---

## Part 2: JavaScript Math Object Methods

### Complete Reference with Examples

#### 1. Math.round() - Round to Nearest Integer
```javascript
console.log(Math.round(3.5));   // Output: 4
console.log(Math.round(3.4));   // Output: 3
console.log(Math.round(3.6));   // Output: 4
console.log(Math.round(-3.5));  // Output: -3 (special case)
```
**Rule**: .5 ya usse zyada → upar, .5 se kam → neeche

---

#### 2. Math.ceil() - Round UP (Ceiling)
```javascript
console.log(Math.ceil(1.2));    // Output: 2
console.log(Math.ceil(1.9));    // Output: 2
console.log(Math.ceil(-1.2));   // Output: -1
console.log(Math.ceil(5.0));    // Output: 5 (already integer)
```
**Rule**: Hamesha **upar** ki taraf round karega (ceiling = chhat)

---

#### 3. Math.floor() - Round DOWN (Floor)
```javascript
console.log(Math.floor(1.2));   // Output: 1
console.log(Math.floor(1.9));   // Output: 1
console.log(Math.floor(-1.2));  // Output: -2
console.log(Math.floor(5.0));   // Output: 5
```
**Rule**: Hamesha **neeche** ki taraf round karega (floor = farsh)

---

#### 4. Math.trunc() - Remove Decimal Part
```javascript
console.log(Math.trunc(4.2));   // Output: 4
console.log(Math.trunc(4.9));   // Output: 4
console.log(Math.trunc(-4.2));  // Output: -4
console.log(Math.trunc(-4.9));  // Output: -4
```
**Rule**: Sirf **integer part** rakhta hai, decimal hata deta hai

**Difference: floor vs trunc**
```javascript
Math.floor(-4.9);  // -5 (neeche gaya)
Math.trunc(-4.9);  // -4 (sirf decimal hata diya)
```

---

#### 5. Math.pow() - Power/Exponent
```javascript
console.log(Math.pow(2, 5));    // Output: 32 (2^5 = 2×2×2×2×2)
console.log(Math.pow(3, 2));    // Output: 9  (3^2 = 3×3)
console.log(Math.pow(5, 0));    // Output: 1  (kisi bhi number ki power 0 = 1)
console.log(Math.pow(2, -2));   // Output: 0.25 (1/4)
```
**Modern Alternative**: `2 ** 5` (ES2016)

---

#### 6. Math.sqrt() - Square Root (√)
```javascript
console.log(Math.sqrt(625));     // Output: 25 (25×25=625)
console.log(Math.sqrt(16));      // Output: 4
console.log(Math.sqrt(2));       // Output: 1.4142135623730951
console.log(Math.sqrt(-4));      // Output: NaN (Negative ka root nahi hota)
```

---

#### 7. Math.cbrt() - Cube Root (³√)
```javascript
console.log(Math.cbrt(27));      // Output: 3 (3×3×3=27)
console.log(Math.cbrt(64));      // Output: 4 (4×4×4=64)
console.log(Math.cbrt(-8));      // Output: -2 (Negative numbers allowed!)
console.log(Math.cbrt(2));       // Output: 1.2599210498948732
```

---

#### 8. Math.abs() - Absolute Value (Positive Banana)
```javascript
console.log(Math.abs(-36));      // Output: 36
console.log(Math.abs(36));       // Output: 36
console.log(Math.abs(-3.14));    // Output: 3.14
console.log(Math.abs(0));        // Output: 0
```
**Rule**: Negative ko Positive mein convert karta hai, Positive ko waise hi rehne deta hai

---

#### 9. Math.max() - Maximum Value Find
```javascript
console.log(Math.max(92, 63, 14, 83, 90));   // Output: 92
console.log(Math.max(-5, -10, -3));          // Output: -3
console.log(Math.max(5));                     // Output: 5 (single value)
console.log(Math.max());                      // Output: -Infinity
```
**Use Case**: Array se max nikalna
```javascript
let arr = [92, 63, 14, 83, 90];
console.log(Math.max(...arr));   // Spread operator use kiya
```

---

#### 10. Math.min() - Minimum Value Find
```javascript
console.log(Math.min(92, 63, 14, 83, 90));   // Output: 14
console.log(Math.min(-5, -10, -3));          // Output: -10
console.log(Math.min(5));                     // Output: 5
console.log(Math.min());                      // Output: Infinity
```

---

#### 11. Math.random() - Random Number Generator
```javascript
// Basic Random (0 to 1, 1 excluded)
console.log(Math.random());  // 0.0 se 0.999... tak kuch bhi

// Generate 4-digit OTP (1000 to 9999)
console.log(Math.floor((Math.random() * 9000) + 1000));
```

**Formula Breakdown:**
```javascript
Math.floor((Math.random() * range) + start)
```

| Requirement | Formula | Example |
|-------------|---------|---------|
| 0 to 9 | `Math.floor(Math.random() * 10)` | 0-9 |
| 1 to 10 | `Math.floor(Math.random() * 10) + 1` | 1-10 |
| 1000-9999 (4-digit OTP) | `Math.floor(Math.random() * 9000) + 1000` | 1000-9999 |
| 1-100 | `Math.floor(Math.random() * 100) + 1` | 1-100 |
| 50-100 | `Math.floor(Math.random() * 50) + 50` | 50-100 |

**OTP Generator Function:**
```javascript
function generateOTP(digits) {
    const min = Math.pow(10, digits - 1);
    const max = Math.pow(10, digits) - 1;
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(generateOTP(4));  // 4-digit OTP
console.log(generateOTP(6));  // 6-digit OTP
```

---

#### 12. toFixed() - Decimal Places Control
```javascript
let a = 34.234423;
console.log(a.toFixed(3));      // Output: "34.234" (String!)
console.log(a.toFixed(2));      // Output: "34.23"
console.log(a.toFixed(0));      // Output: "34"
console.log(a.toFixed(5));      // Output: "34.23442"

// Convert back to number
console.log(Number(a.toFixed(3)));  // 34.234 (Number)
console.log(+a.toFixed(3));         // 34.234 (Number - shorthand)
```

**⚠️ Important:** `toFixed()` hamesha **String** return karta hai!

**Rounding Behavior:**
```javascript
(34.235).toFixed(2);   // "34.24" (upar gaya)
(34.234).toFixed(2);   // "34.23" (neeche hi rahega)
```

---

## Quick Reference Table

| Method | Purpose | Example Input | Output |
|--------|---------|---------------|--------|
| `Math.round()` | Nearest integer | 3.5 | 4 |
| `Math.ceil()` | Round UP | 1.2 | 2 |
| `Math.floor()` | Round DOWN | 1.9 | 1 |
| `Math.trunc()` | Remove decimal | 4.9 | 4 |
| `Math.pow()` | Power calculation | 2, 5 | 32 |
| `Math.sqrt()` | Square root | 625 | 25 |
| `Math.cbrt()` | Cube root | 27 | 3 |
| `Math.abs()` | Positive value | -36 | 36 |
| `Math.max()` | Maximum value | 92,63,14 | 92 |
| `Math.min()` | Minimum value | 92,63,14 | 14 |
| `Math.random()` | Random 0-1 | - | 0.XXX |
| `toFixed(n)` | n decimal places | 34.234423, 3 | "34.234" |

---

## Interview Tips 💼

### Scope Chain Questions:
1. **Q**: `a = 10` without declaration kyun kaam karta hai?
   **A**: JavaScript forgiving nature + legacy support. Strict mode mein error dega.

2. **Q**: Scope Chain kya hai?
   **A**: Variable lookup mechanism - Local → Parent → Global → Global Object

3. **Q**: Implicit Global ka problem kya hai?
   **A**: Memory leak, naming conflicts, debugging difficult. Hamesha `let`/`const` use karein.

### Math Object Questions:
1. **Q**: `floor` vs `trunc` mein difference?
   **A**: Negative numbers mein: `floor(-4.9) = -5`, `trunc(-4.9) = -4`

2. **Q**: `toFixed()` ka return type?
   **A**: **String**! Number chahiye toh `Number()` ya `+` se convert karein.

3. **Q**: Random number specific range mein kaise?
   **A**: `Math.floor(Math.random() * (max - min + 1)) + min`

---

*Happy Coding & Interview Cracking! 🚀*

**Created**: April 2026
**Purpose**: JavaScript Interview Preparation
