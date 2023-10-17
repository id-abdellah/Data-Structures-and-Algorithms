<style>h1,h2,h3,h4 { border-bottom: 0; } </style>

# Factorial Number

```js
function factorial(n) {
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result *= i;
    }
    return result
}

console.log(factorial(0))
console.log(factorial(1))
console.log(factorial(5)); // 120
console.log(factorial(4)); // 24
console.log(factorial(10)); // 3628800

/* Time Complixity => O(n) */
```

#### Recursive Factorial

```js
function recursivFactorial(n) {
    if (n === 0) {
        return 1
    }
    return n * recursivFactorial(n - 1)
}   
/* Time Complixity => O(n) */
```

<br>
<br>

# Fibonacci Sequence

```js
function fibonacciSequence(n) {
    let fib = [0, 1];
    for (let i = 2; i < n; i++) {
        fib[i] = fib[i - 2] + fib[i - 1];
    }
    return fib
}
console.log(fibonacciSequence(10)); // [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
console.log(fibonacciSequence(8)); // [0, 1, 1, 2, 3, 5, 8, 13]
console.log(fibonacciSequence(7)); // [0, 1, 1, 2, 3, 5, 8]

// Big O => O(n)
```

#### Recursive Fibonacci

```js
function recursivFibonacci(n) {
    if (n < 2) {
        return n
    }
    return recursivFibonacci(n - 1) + recursivFibonacci(n - 2)
}
big O => O(2^n)
```


<br>
<br>

# Prime Numbers

```js
function isPrimeNumber(n) {
    if (n < 2) {
        return false;
    }
    for (let i = 2; i < n; i++) {
        if (n % i == 0) {
            return false
        }
    }
    return true
}
/* big O => O(n) */
```

But, There is an optimal solution

Integers larger than the square root do not need to be checked Because whenever " n = a * b " one of the two factors "a" and "b" is less than or equal to the square root of "n"

```js
function isPrimeNumber_optimal(n) {
    if (n < 2) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i == 0) {
            return false
        }
    }
    return true
}

/* big O => O(sqrt(n)) */
```


<br>
<br>

# is power of 2

```js
// if the log2(n) is integer then n is power of two

// otherwise if it is float then n is not power of two

function isPowerOfTwo(n) {
    if (n == 0) return false;
    if (Math.log2(n) % 1 == 0) {
        return true
    } else {
        return false
    }
    // return Number.isInteger(Math.log2(n))
}
```

```js
function isPowerOfTwo_secondAlgo(n) {
    if (n == 0) return false;
    while (n > 1) {
        if (n % 2 !== 0) {
            return false
        }
        n = n / 2;
    }
    return true
}
console.log(isPowerOfTwo_secondAlgo(1)); // true
console.log(isPowerOfTwo_secondAlgo(2)); // true
console.log(isPowerOfTwo_secondAlgo(5)); // false
console.log(isPowerOfTwo_secondAlgo(16)); // true

// big O => O(log n) : input size is reduced by halfe
```