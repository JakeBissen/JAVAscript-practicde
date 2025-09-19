
//// How to make an inifinte function
//let a = {}
// a.a = a;

// -----EXIT CONDITION-----
// let i = 0;
// while (i < 10) {
//     console.log(i);
//     i += 1;

// }

// function countToTen(val){
//     if (val >= 10)
//      return; // exit condition
//     console.log(val);
//     countToTen(val +1);
// }
// countToTen(0);
// -----END OF EXIT CONDITION-----

// a function call is placed on a 'Stack.'

// Stack: A stack is a data structure that follows the Last-In-First-Out (LIFO) principle. Meaning that the last element added to the stack is the first one to be removed. STACKS ARE LIMITED= when the limit is reached, you get a stack overload.

// function countToHundredThousand(val){
//     if (val >= 100000)
//      return; // exit condition
//     console.log(val);
//     countToHundredThousand(val +1);
// }
// countToHundredThousand(0);
// 

// -----FACTORIAL-----
/*  0! = 1
 n! = n + (n-1)!
 */

 function factorial(n){
    if (n === 0) return 1;
    // unreachable code for n = 0
    return n * factorial(n - 1);
 }
// 5! ---> 5 * 4! ---> 5 * 4 * 3! ---> 5 * 4 * 3 * 2! --> 5 * 4 * 3 * 2 * 1! ---> 5 * 4 * 3 * 2 * 1 * 1

 let factArrow = n => n === 0 ? 1 : n * factorial(n - 1);

 console.log('factorial(5)', factorial(5));
  console.log('factArrow(5)', factArrow(5));
console.log ('5*4*3*2', 5*4*3*2);



    // let condition = true;
    // condition ? 'trueValue' : 'fasleValue'
    // this becomes true. If condition was false it would be false.