// let f = x = x + 1
// f(5) 
// // = 6

// f(0)
// // = 1

// f()
// // = undefined


// let g = (x, y) => 2*x + y +1;
// // == undefined
// g( 1, 1);
// // = 4
// g(1)
// // = undefined


// function solution (x, y) {
//     console.log('x', x);
//     console.log('y', y);
//     return -2;
// }
// x =5
// y =1
// solution(5, 1);
// // = -2
// a function with no body = return undefined
// 1e2 = 100

// function getInput(){
//     let intValue = null;
// do {
//     let value = prompt('Enter a number between 1 and 100');
//     intValue = Number.parseInt(value);
// } while (
// Number.isNaN(intValue) || 
// typeof intValue !== 'number' || intValue < 1 
// || intValue > 100
// );
// return intValue;
// }


// function printResult(mid, direction, minValue, maxValue ){
//     console.log(
//     `${mid} ${direction} (interval: ${minValue} - ${maxValue})`       
//         );
// }

// function guessTheNumber(){
//     let intValue = getInput();



// let minValue = 1;
// let maxValue = 100;

// while(minValue < maxValue) {
//     let midpoint = Math.floor( (minValue + maxValue) / 2 );
//     if (intValue === midpoint){
//          minValue = maxValue = midpoint; // causes all to be equal/the same number
//     } else if (intValue < midpoint){
//         maxValue = midpoint - 1;
//         printResult(midpoint, 'lower', minValue, maxValue );
//     } else{
//         minValue = midpoint + 1;
//         printResult(midpoint, 'higher', minValue, maxValue );

//     }
       
// }
//     console.log( `${minValue} match`);

// }




