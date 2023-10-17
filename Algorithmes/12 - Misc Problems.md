# Catesian Product

```js
function cartesianProduct(a, b) {
    let ab = [];
    for (let i = 0; i < a.length; i++) {
        for (let j = 0; j < b.length; j++) {
            ab.push([a[i], b[j]])
        }
    }
    return ab
}
console.log(cartesianProduct([1, 2], [8, 9]))
/* [ [1, 8], [1, 9], [2, 8], [2, 9] ] */
```

Big O => O(mn): 
+ Not O(n^2) because of there is possible for the two loops to be in different n iteration 

<br>
<br>

# Claiming Staicase

```js
function climbingStaircase(n) {
    let numberOfWays = [1, 2];
    for (let i = 2; i < n; i++) {
        numberOfWays[i] = numberOfWays[i - 1] + numberOfWays[i - 2];
    }
    return numberOfWays[n - 1]
}

console.log(climbingStaircase(1)); // 1
console.log(climbingStaircase(2)); // 2
console.log(climbingStaircase(3)); // 3
console.log(climbingStaircase(4)); // 5
console.log(climbingStaircase(5)); // 8
console.log(climbingStaircase(6)); // 13
```


<br>
<br>

# Tower Of Hanoi

```js
function towerOfHanoi(n, fromRod, toRod, usingRod) {
  if (n === 1) {
    console.log(`Move disk 1 from ${fromRod} to ${toRod}`)
    return
  }
  towerOfHanoi(n - 1, fromRod, usingRod, toRod)
  console.log(`Move disk ${n} from ${fromRod} to ${toRod}`)
  towerOfHanoi(n - 1, usingRod, toRod, fromRod)
}

towerOfHanoi(3, 'A', 'C', 'B')
/*
    Move disk 1 from A to C
    Move disk 2 from A to B
    Move disk 1 from C to B
    Move disk 3 from A to C
    Move disk 1 from B to A
    Move disk 2 from B to C
    Move disk 1 from A to C
*/
```

Time Complixity => O(2^n)