1. 
// console.log('0', '1', '2', '3', '4', '5', '6', '7', '8', '9');
// console.log('1', '2', '3', '4', '5', '6', '7', '8', '9', '10');
// console.log('9', '8', '7', '6', '5', '4', '3', '2', '1', '0');
// console.log('10', '9', '8', '7', '6', '5', '4', '3', '2', '1');
// console.log('odd', '2', 'odd', '4', 'odd', '6', 'odd', '8', 'odd', '10', 'odd', '12', 'odd', '14', 'odd', '16', 'odd', '18', 'odd', '20', 'odd', '22', 'odd', '24', 'odd'); //WRONG


//1.
    // console.log('0 to 9');
// for (let i = 0; i < 10; i++){
//     console.log(i);
// }

// console.log('one to ten');
// for (let i = 1; i <= 10; i++)
//     console.log(i);


// console.log('9 to zero');
// for (let i = 9; i >= 0; i--){
//     console.log(i);
// }


// console.log('10 to zero');
// for(i = 10; i >= 1; i--){
//     console.log(i);
// }


// console.log('1 to 25');
// for (let i = 1; i <= 25; i++){
//     if ( i % 2 == 1){
//         console.log('odd');
//      } else {
//         console.log(i);
//      }
// }   //Guessed correctly!

//// ParseInt drops fractional values, so 12.3 becomes 12 and 5.8 becomes 5 for example.
2. 
// let intValue = null;
// do {
//     let value = prompt('Enter a number between 1 and 100');
//     intValue = Number.parseInt(value);
// } while (
// Number.isNaN(intValue) || 
// typeof intValue !== 'number' || intValue < 1 
// || intValue > 100
// );


// // console.log('the input is valid,' + intValue);

// 3. 

// let minValue = 1;
// let maxValue = 100;

// while(minValue < maxValue) {
//     let midpoint = Math.floor((minValue + maxValue) / 2);
//     if (intValue === midpoint){
//          minValue = maxValue = midpoint; // causes all to be equal/the same number
//     } else if (intValue < midpoint){
//         maxValue = midpoint - 1;
//         console.log(
//             `${midpoint} lower (interval: ${minValue} to ${maxValue})`       
//         );
//     } else{
//         minValue = midpoint + 1;
//         console.log
//         (`${midpoint} higher (interval: ${minValue} to ${maxValue})`
//         );

//     }
       
// }
//     console.log( `${minValue} match`);




// 
// let enter = prompt('enter an number 1-100');
// for (let i = 1; i <= 100; i++) {
//     if (i = enter)
//         console.log('number is ' + enter);
//     else
//         console.log('not your number');    
// }








// Math.random() * 1000; // Generate a random number between 0 and 999