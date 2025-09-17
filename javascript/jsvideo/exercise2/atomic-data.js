// atomic means that it is indevisble and passed by value.
// symbol are unquie values
console.log(5, typeof 5);
console.log(5.2, typeof 5.2);
console.log('text', typeof 'text');
console.log(true, typeof true);
console.log(false, typeof false);
console.log(null, typeof null);
console.log(undefined, typeof undefined);
console.log(2n, typeof 2n)

Number.MAX_SAFE_INTEGER
//9007199254740991 'largest number java can handle'
// 10 ** 309= infintiy to java USE bigInts to make numbers that are 'too large' show their entirity.
// 9007199254740991n 'all numbers must have the n behind them.'
// console.log(symbol(), typeof symbol());

// let twoX = x => 2*x --- function
// let sum = (a, b) => a + b; --- function
// let prod = (a, b=1) => a * b; --- function
// let prod2 = function (a, b=1) => { return a * b;
// } --- function ONE WAY TO CREATE FUNCTION
// function prod3 (a, b=1) {return a * b;
// } SECOND WAY TO WRITE A FUNCTION--- these curly braces are a block
// blocks group statements. 

//let x = Symbol() if you have symbol, you have a unquie value each and every time you create one.



                // OBJECTS
// // let owner = {
// firstName: 'frank'
// lastName; 'Owner'
// age: 72
// }; ---- these curly braces denote the boundaries of the object itself. Function as an object constructor. Object constructor creates objects, and groups them together. {} = object. Object = definition
//  Objects have keys and values. Left hand items like 'firstName' are keys and the right side items like 'frank' are values.  key: value
// values can be any primitive or composite data. Keys have to either be string or symbol keys. 
// Notation---- owner.firstName
// BRACKET NOTATION---- owner['firstName']
// You can use the bracket notation to use the value of another variable inorder to denote the key of an object. 

//    INTERRESTING object
// let o = {};
// o.o = o;
//  they become----- {o: {...}} goes on forever
// 
// owner.id = '123456';
// owner.age += 1;  ----- owner age increases by 1


//                  ARRAYS/LISTS
// [] = constructors of lists. Also an array/list. When pushed with typeof it is an object.
// let shoppingList = [
//  'bananas',
//   'apples',
//    'cherries',
//      'tomatoes',
// ]; ----pushed:
// shoppinglist
// (4) ['bananas', 'apples', 'cherries', 'tomatoes']
// shoppingList[0]----= 'bananas'
// Order starts as: 0, 1, 2, 3, 4, etc
// to get last element: shoppingList[shoppingList.length - 1]; ---- or use: shoppingList.at(-1);

//  to check if an object is an array or not, use the following: Array.isArray([]); --- this becomes true because [] are seen as an array. However, Array.isArray({}); turns false because {} are seen as an object.
// Add commas at the end of values so that you dont have to edit the line before it.
// 



//              SET AND MAP
// let list = [5, 2, 1, 1, 5, 4, 1, 2, 2, 1]
// let listDictionary = {
// '1': true,
// '2': true,
// '4': true,
// '5': true
// };
// listDictionary[1] = true
// listDictionary[8] = undefined

// let mySet = new Set(list);--- Replaces the cumbersome version of 'listDictionary'
// mySet = Set(4) {5, 2, 1, 4}
// mySet.add(7); --- adds 7 to the list
//  mySet.delete(7); --- removes 7
// mySet.has(1); --- informes you if you have 1 or not
//  mySet.size ---> 4 --- because there are 4 differnet numbers
// Very helpful in data structures and Althorgims

//          MAPs
// Maps are objects that can have any kind of key.
// let list = [5, 2, 1, 1, 5, 4, 1, 2, 2, 1]
// let myMap = new Map();
// myMap ---> Map(0) {size: 0}
//  myMap.set(1, 4);   ---- use this to add values. Note that keys don't have to be strings anymore.
// myMap.set(2, 3);
// myMap.get(1); ---> 4  ---- checks how many times 1 is listed.
// myMap.set(true, 0) ----> true= 0
// myMap.delete(true) ---> removes the value 'true'.
// myMap.size ----- informes you how may values you have.

// mySet
// let setAsMap = new Map();
// setAsMap.set(5, true);
// setAsMap.set(2, true);
// setAsMap.set(1, true);
// setAsMap.set(4, true);
// setAsMap.has(5); ---- used to check the keys
// a set can be described as a map. 
// sets and maps are objects.


