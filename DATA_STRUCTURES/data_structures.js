// ------------------- data structures ------------- //


// List / Arry -- most basic data structure

// array is a collection of items stored at contiguous memory locations

// let bookTitles = ["The River", "The ultimate side of world"];

// // Dictionary / Object unordered collection of data in key value pairs. Keys are used for quick lookup of values
// // no decitated syntax for dictionary in js, we use object for that. Make object into dictionary

// let person = {
//     'name': 'Masood',
//     'age': '30',
//     'role': 'trainer',
//     'role': 'developer' // duplicate key, last one will be considered
// }

// console.log(person.name); // accessing value using key

// console.log(person['role']); // accessing value using key


// //Stacks & Queues -- linear data structures
// // Stacks = LIFO (last in first out) Queues = FIFO (first in first out)
// // Stack -- LIFO (last in first out) - like a stack of plates, you add and remove from the top
// // push() - add to the top
// // pop() - remove from the top

// let webPages = [];
// webPages.push('A');
// webPages.push('B');
// webPages.push('C');

// console.log(webPages.pop());
// console.group(webPages);

// // pop removes the last added item. Console logging webPages shows the remaining items- A and B only. Pop adds and removes the item from the list. Push adds it to the list.
// // Pop removes the lastest item added
// // webPages.pop();

// // console.log(webPages);



// let listOfOrders = [];

// listOfOrders.push('Order 1');
// listOfOrders.push('Order 2');
// listOfOrders.push('Order 3');

// console.log(listOfOrders.shift());

// console.log(listOfOrders);
// // shift is same as pop, but removes the top/first item. Shift removes the very first item added.



////// --------------- RECURSION ---------------------//////

function a(count){

    console.log('A ' + count);

    if(count == 10)
    {
        return -1;
    }
    count++;
    return a(count);
}

a(1);

// let factorial = Number(prompt('Enter number please'));
// function fact(factorial){
//     if (factorial < 0){
//         console.error ('negative number');
//         return undefined;
//     }
//     return fact(factorial * factorial - 1);
    
// }
// console.log(fact(factorial));
// wrong way /\  correct way \/ ---was close

function fact(value)
{
    if (value <= 1)
    {
        return 1
    }
    return value * fact(value - 1)
}

console.log(fact(4));



