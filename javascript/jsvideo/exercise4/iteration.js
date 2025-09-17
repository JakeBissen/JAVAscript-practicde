let list = ['Sunday', 
    'Monday', 
    'Tuesday', 
    'Wendsday', 
    'Thursday', 
    'Friday', 
    'Saturday'
];
// USE PYTHON.TUTOR for HELP!

console.log('while loop: ');

let i = 0
while (i < list.length){
    console.log(list[i]);
    i = i +1

}

console.log('for loop: ');
/// FOR LOOPS
// for (initialization; condition; increment/decrement){ body_statements; }
for(let i =0; i <list.length; i += 1){
    console.log(list[i]);
}

console.log('for..in loop: ');
for(let i in list){
        console.log(list[i]);

}




console.log('for..of loop: ');
for(let day of list){
        console.log(day);

}



