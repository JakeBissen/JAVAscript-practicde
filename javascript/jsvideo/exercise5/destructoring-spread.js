// Destructuring
// let [first, second, third] = [{a: 1}, {a:2}, {a: 5}];


// let [first, {a: secondAValue}] = [{a: 1}, {a:2}, {a: 5}];

// let a = 2;
// let b = 1;

// console.log( a, b);
// [a, b ] = [b, a]; 
// // [a, b ] = [1, 2]; 
// // a = 1; AND b = 2; in parallel.
// // 2 1
// // 1 2
// console.log(a ,b);

// // let first = {a : 1}
// // let secondValue = 2

// first = {a: 1}
// second= {a: 2}
// third = {a: 5}




// Spread Operator

// let arr = [1, 2, 5];
// // ...arr

// [...arr] // works!
// // (3) [1, 2, 5]

// [5, ...arr, ...arr]

// let mixin1 = {
//     id: '123456'
// }

// let mixin2 = {
//     age: 25,
//     biologicalAge: 24
// }

// let person = {
//     first: 'Jack',
//     last: 'last',
//     ...mixin1,
//     ...mixin2
// }

//person = All 3 (mixin1, mixin2, and person)

// -----DESTRUTING AND SPREAD OPERATOR RELATIONSHIP WITH FUNCTIONS-----

// function logName(name){
//     let first = name.first;
//     let last = name.last;
//     console.log (`$(first) $(last)`);
    
// }

// let name = {
//     first: 'First',
//     last: 'last',
// }
// logName(name);

// destructuring

// function logName(name){
//     let {first, last} = name; // object property shorthand notation
//     console.log (`$(first) $(last)`);
    
// }

// logName(name);

// logName({first: 'A', last: 'B'});

// // can also do this here \/
// function logName({first, last}){
//     console.log (`$(first) $(last)`);
// }

// -----DISTRUCTURING IN FUCTIONS ----///

// let person = {
//     first: 'first',
//     last: 'last',
//     id: '123456',
// }

// function logName({first, last}){
//     console.log (`$(first) $(last)`);
// }

// logName(person);

// let { first: first, last: last } = {
// first: 'first', // assigned 'first'
//     last: 'last', // assigned 'last'
//     id: '123456',
// };


// -----REST PARAMETERS IN FUCTIONS ----///
// : write a function that returns the sum of its arguments.

// function sum (...args){
//     let sum = 0;
//     for (let arg of args){
//         sum += arg;
//     }
//     return sum; 
// }
// let arr = [1, 2, 5];
// ...arr ---> 1, 2, 5

// console.log( 'expecation: 8. result: ', sum(1, 2, 5) );
// // result = 8

// let argumentValues = [1, 2, 3, 4, 5, 6, ,7 ,8 ,9, 10];
// console.log ('expeations: 55. Result: ', sum(...argumentValues) );
// result = 55

// // -----CAN NOT ADD ANYTHING ELSE AFTER A REST PARAMETER!!!!!-------
// // value, ...rest, value2 is NOT POSSIBLE!
// // value, value2, ...rest = CORRECT!!!!


// function sumRecursive (first, ...rest){
//     if (typeof first === 'undefiend') return 0;
//     return + sumRecursive(...rest);

// }
// // let arr = [1, 2, 5];
// // ...arr ---> 1, 2, 5

// console.log( 'expecation: 8. result: ', sumRecursive(1, 2, 5) );
// // result = 8

// let argumentValues = [1, 2, 3, 4, 5, 6, ,7 ,8 ,9, 10];
// console.log ('expeations: 55. Result: ', sumRecursive(...argumentValues) );

// sumRecursive(1, 2, 5) = sumRecursive( 1, ...[2, 5])

// function argLog(first, ...rest) {
//     console.log(first, rest);
// }
// argLog(1, 2, 5);
// argLog(1);
// argLog();



// let [first, ...rest] = [1, 2, 5]; 

// let name = {
//     first: 'First',
//     last: 'last',
//     id: '12345',
// }

// let {
//     id,
//     ...rest
// } = name

// fowarding the code = contents of id. HOWEVER, ...rest still contains 'first' and 'last'





/// -----SPREAD OPERATOR -----/////


// function plusOne (value){
//     value += 1;
//     console.log(value);
// }

// let val= 1;
// plusOne(val);
// console.log(val);

// this equals 2 1


// function plusOne (value, num){
//     value.x += 1;
//     num += 1;
//     console.log(value, num);
// }

// let val= {x: 1};
// let num = 1;
// plusOne(val, num);
// console.log(val, num);

// this equals let [value, num] = [{x:1}, 1]; 