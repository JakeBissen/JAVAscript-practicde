/*
Algorithm: sequence of executable instructions to solve a task.
Measuring algorithms:
- time needed to execute the algorithm
- space required to execute the algorithm

Time and space complexity is esimated as "worst case".

Big O: 
- definiton
- is it an overestimation (worse case)
- can be used for space and time
- always measured w.r.t. the input size


f(x)  
g(x)

|f(x)| <= M * g(x) for x >= x0

O(g(x))

O(1)
O(n)
O(n * log(n))
O(n** 2)
O(n ** 3)
O(2 ** n)

ANSWER is almost always one of these /\

*/



/* Solution 1
function sumN(n){
    let solution = 0;
    for (let i = 1; i <= n; i++){
        solution += i;
    }
    return solution;
}

3 * n + 6

9        n = 1     9n 
12       n = 2     9n = 18       12 <= 18
15       n = 3     9n = 27       15 <= 27
18       n = 4     9n = 36       18 <= 36
306      n = 100   9n = 900      306 <= 900


O(n)
*/


/* Solution 1.1

function sumN(n){
    let solution = 0;
    for (let i = 1; i <= n; i++){
        solution += i;
    }
        let solutionw2 = 2;
    for (let i = 1; i <= n; i++){
        solution2 += i;
    }
    if( solution == solution2){
    return solution;
    }
    return NaH;
}

O(n)

*/ 


//// nested means that there is a loop inside of another loop.

/* Nested loop

//// Generates all (i, j) tuples from 1 to n

function getTuples(n) {
  let tuples = [];

  for (let i = 1; i <= n; ++i) {
    for (let j = 1; j <= n; ++j) {
      tuples.push([i, j]);
    }
  }

  return tuples;
}

equals O(n ** 2)

*/

/*
//// best algorithm is: O(1)

 1 2 3 4 5 6 7 8 9 10

Visual pairing:
1 + 10 = 11  
2 + 9  = 11  
3 + 8  = 11  
4 + 7  = 11  
5 + 6  = 11  

→ 5 pairs × 11 = 55  
→ Sum of 1 through 10 = 55

Efficient formula:
S = n(n + 1) / 2

JavaScript version:
function efficientSumN(n) {
    return n / 2 * (n + 1);
}

*/

/*
let x = Math.floor(Math.random() * 128) + 1

Math.log2(128)
// 7

function evaluate(value, guess) {
  if (value > guess) { return '+'; }
  if (value < guess) { return '-'; }
  return 'correct';
}

evaluate(x, 64)

*/



/*
LOOOK AT IN WIDER SCREEN TO MAKE SENSE!!!!!!!!!!!!!!!!!!!!
Time Complexity Comparison Table

| Input Size | O(1) | O(log(n)) | O(n)   | O(n * log(n))     | O(n^2)   | O(2^n)   |
|------------|------|-----------|--------|--------------------|----------|----------|
| 100        | 1    | 2         | 100    | 10^2 * 2 = 200     | 10,000   | 1.26 * 10**30 |
| 1000       | 1    | 3         | 1000   | 10^3 * 3 = 3000    | 1,000,000| 1.07 * 10**301|
| 10000      | 1    | 4         | 10000  | 10^4 * 4 = 40000   | 10**8    | basically inifinty|
| 100000     | 1    | 5         | 100000 | 10^5 * 5 = 500000  | 10**10   | basically inifinty|

Key Takeaways:
- O(1): Constant time, unaffected by input size.
- O(log(n)): Grows slowly, ideal for binary search.
- O(n): Linear growth, scales directly with input.
- O(n * log(n)): Common in efficient sorting algorithms.
- O(n^2): Quadratic growth, typical in nested loops.
- O(2^n): Exponential growth, often seen in brute-force recursion.


*/



