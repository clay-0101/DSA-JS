# JavaScript String Manipulation Practice

> A collection of fundamental string exercises solved in JavaScript, covering iteration, reversal, palindrome checking, and various utility functions.

---

## Table of Contents
1. [Basic String Iteration](#1-basic-string-iteration)
2. [String Reversal](#2-string-reversal)
3. [Palindrome Check](#3-palindrome-check)
4. [Count Asterisks Between Pairs](#4-count-asterisks-between-pairs)
5. [Sort Sentence](#5-sort-sentence)
6. [Capitalize Starts and Ends](#6-capitalize-ends)
7. [Toggle Case](#7-toggle-case)
8. [Character Frequency](#8-character-frequency)

---

## 1. Basic String Iteration
**Question:** Print every character of a string on a new line.

### Solution
```javascript
let prompt = require('prompt-sync')();
let str = prompt('Enter Your String : ');

for (let i = 0; i < str.length; i++) {
    console.log(str.charAt(i));
}
```

### Explanation
- Uses a `for` loop to iterate from index `0` to `str.length - 1`
- `charAt(i)` extracts the character at each index
- Each character is printed on a separate line

**Example:**
```
Input: "Hello"
Output:
H
e
l
l
o
```

---

## 2. String Reversal
**Question:** Print a string in reverse order.

### Solution
```javascript
let prompt = require('prompt-sync')();
let str = prompt('Enter Your String : ');
let revStr = '';

for (let i = str.length - 1; i >= 0; i--) {
    revStr += str.charAt(i);
}
console.log(revStr);
```

### Explanation
- Initialize an empty string `revStr` to store the reversed result
- Loop backwards from the last index (`str.length - 1`) to `0`
- Append each character to `revStr`
- Print the final reversed string

**Example:**
```
Input: "JavaScript"
Output: "tpircSavaJ"
```

---

## 3. Palindrome Check
**Question:** Check if a given string is palindromic or not (case-insensitive).

### Solution
```javascript
let prompt = require('prompt-sync')();
let str = prompt('Enter Your String : ').toLocaleLowerCase();
let revStr = '';

for (let i = str.length - 1; i >= 0; i--) {
    revStr += str.charAt(i);
}

if (str == revStr) {
    console.log('Palindromic String');
} else {
    console.log('Not Palindromic String');
}
```

### Explanation
- Convert input to lowercase using `toLocaleLowerCase()` for case-insensitive comparison
- Reverse the string using the same logic as Question 2
- Compare original and reversed string
- If equal → Palindrome, else → Not a palindrome

**Example:**
```
Input: "Madam"
Output: "Palindromic String"

Input: "Hello"
Output: "Not Palindromic String"
```

---

## 4. Count Asterisks Between Pairs
**Question:** Count asterisks `*` that appear between pairs of `|` characters. Only count asterisks that are between complete pairs (outside pairs are ignored).

### Solution
```javascript
function countAsterisks(s) {
    if (s.includes('|')) {
        let count = 0;
        let countStr = 0;

        for (let i = 0; i < s.length; i++) {
            if (s[i] == '|' && count == 0) {
                count++;
            } else if (s[i] == '|' && count == 1) {
                count++;
            } else if (s[i] == '|' && count == 2) {
                count = 1;
            } else if (s[i] == '*' && count == 2) {
                countStr++;
            }
        }
        return countStr;
    } else {
        return 0;
    }
}

module.exports = { countAsterisks };
```

### Explanation
- **State Machine Approach:** Uses a counter to track whether we're inside or outside pairs
  - `count = 0`: Outside any pair (initial state)
  - `count = 1`: Found first `|`, waiting for second `|`
  - `count = 2`: Inside a complete pair (count asterisks here)
- When a third `|` is found, reset to `count = 1` to handle multiple pairs
- Only counts `*` when `count == 2` (inside a complete pair)

**Example:**
```javascript
countAsterisks("l|*e*et|c**o|de|"); // Output: 2
// Pairs: |*e*et| and |c**o|de|
// Asterisks inside pairs: * and * (from first pair) = 2
```

---

## 5. Sort Sentence
**Question:** Sort the words in a sentence alphabetically.

### Solution
```javascript
function sortSentence(s) {
    let arr = s.split(' ');
    let sorted = arr.sort();
    return sorted.join(' ');
}

module.exports = { sortSentence };
```

### Explanation
- `split(' ')` breaks the sentence into an array of words
- `sort()` arranges words alphabetically (A-Z)
- `join(' ')` combines the sorted array back into a string

**Example:**
```javascript
sortSentence("hello world apple"); // Output: "apple hello world"
```

---

## 6. Capitalize Ends
**Question:** Capitalize the first and last character of every word in a string.

### Solution
```javascript
function capitalizeEnds(str) {
    let arrOfWord = str.split(' ');
    let arr = [];

    for (let i = 0; i < arrOfWord.length; i++) {
        let end = arrOfWord[i].length;
        let empStr = arrOfWord[i].charAt(0).toUpperCase() + 
                     arrOfWord[i].slice(1, end - 1) + 
                     arrOfWord[i].charAt(end - 1).toUpperCase();
        arr.push(empStr);
    }
    return arr.join(' ');
}

module.exports = { capitalizeEnds };
```

### Explanation
- Split string into words
- For each word:
  - `charAt(0).toUpperCase()` → Capitalize first letter
  - `slice(1, end - 1)` → Keep middle characters as-is
  - `charAt(end - 1).toUpperCase()` → Capitalize last letter
- Join modified words back with spaces

**Example:**
```javascript
capitalizeEnds("hello world"); // Output: "HellO WorlD"
```

---

## 7. Toggle Case
**Question:** Toggle the case of every character (upper → lower, lower → upper).

### Solution
```javascript
function toggleCase(str) {
    let toggleStr = '';

    for (let i = 0; i < str.length; i++) {
        if (str.charCodeAt(i) >= 65 && str.charCodeAt(i) <= 90) {
            // Uppercase A-Z (65-90) → convert to lowercase
            toggleStr += str[i].toLowerCase();
        } else if (str.charCodeAt(i) >= 97 && str.charCodeAt(i) <= 122) {
            // Lowercase a-z (97-122) → convert to uppercase
            toggleStr += str[i].toUpperCase();
        } else {
            // Non-alphabetic characters remain unchanged
            toggleStr += str[i];
        }
    }
    return toggleStr;
}

module.exports = { toggleCase };
```

### Explanation
- Uses ASCII values to identify character case:
  - **65-90:** Uppercase letters (A-Z)
  - **97-122:** Lowercase letters (a-z)
- `charCodeAt(i)` gets the ASCII value
- Non-alphabetic characters (spaces, numbers, symbols) are preserved

**Example:**
```javascript
toggleCase("Hello World 123"); // Output: "hELLO wORLD 123"
```

---

## 8. Character Frequency
**Question:** Print the frequency of each unique character in a string (excluding spaces).

### Solution
```javascript
function characterFrequency(str) {
    let words = str.split(' ').join(''); // Remove all spaces
    let uniqueChar = [...new Set(words)].sort(); // Get unique chars and sort

    for (let i = 0; i < uniqueChar.length; i++) {
        let count = 0;
        for (let j = 0; j < words.length; j++) {
            if (uniqueChar[i] == words[j]) {
                count++;
            }
        }
        console.log(`${uniqueChar[i]}: ${count}`);
    }
}

module.exports = { characterFrequency };
```

### Explanation
1. **Remove spaces:** `split(' ').join('')` concatenates all characters
2. **Extract unique characters:** `[...new Set(words)]` creates an array of unique chars
3. **Sort:** `.sort()` arranges characters alphabetically
4. **Count occurrences:** Nested loop compares each unique char against the full string
5. **Print:** Outputs in format `character: count`

**Example:**
```javascript
characterFrequency("hello world");
// Output:
// d: 1
// e: 1
// h: 1
// l: 3
// o: 2
// r: 1
// w: 1
```

---

## Key Concepts Covered

| Concept | Questions |
|---------|-----------|
| String Iteration | 1, 2, 3, 7, 8 |
| `charAt()` / Indexing | 1, 2, 3, 6 |
| `charCodeAt()` | 7 |
| `split()` / `join()` | 5, 6, 8 |
| `toUpperCase()` / `toLowerCase()` | 3, 6, 7 |
| `slice()` / `substring()` | 6 |
| Array `sort()` | 5 |
| `Set` for uniqueness | 8 |
| State Machine Logic | 4 |

---

## How to Use

1. **For Node.js CLI programs** (Questions 1-3): Install `prompt-sync`
   ```bash
   npm install prompt-sync
   ```

2. **For helper functions** (Questions 4-8): Import and use in your projects
   ```javascript
   const { countAsterisks } = require('./helper');
   console.log(countAsterisks("l|*e*et|c**o|de|"));
   ```

---

*Happy Coding! Keep practicing to master string manipulation in JavaScript.*
