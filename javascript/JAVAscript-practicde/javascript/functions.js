
// function greet()
// {
//     console.log("Hello, World!");
// }

// function addition(number1, number2, number3) // number1 and number2 and number3 are parameters
// {
//     console.log(number1 + number2, number3);
// }

// addition(10, 20); // 5 and 10 are arguments
// addition(100, 200); // 20 and 30 are arguments
// addition(1, 2);

// addition(5, 5, 5);


// greet();
// greet();
// greet();




//  function min(numbers)
// {
    
//     let min = numbers[0];
//     let sec = numbers[0];
//     for(let i = 0; i< numbers.length; i++ )
//     {
//         if(min > numbers[i])
//         {
//             min = numbers[i];
//         }
//         if ((sec < numbers[i]) && (sec > min)) {
//             sec > min;
//         }
//     }
//     console.log("Minimum is: " + min + ' and second minimum is: ' + sec);
// }
//  min([10, 3, 30, 140, 50, 3, 54, 70, -10, 80, 90, 4, 3, -20, -30, 100, 3])



// function searchWithCount(number)
// {
//     let input = parseInt(prompt("Enter a number to search for:"));
//     let notify = false;
//     let count = 0;
//     for( let i = 0; i < number.length; i++)
//     {
//         if(number[i] == input)
//         {
//             notify = true;
//             count++;

//         }
//         else 
// {
//     notify == true
// }
//             console.log ('Number'+ input +'found at index'+ i + ', count:'+ count)
// }
// }
// let numbers = [10, 3, 30, 140, 50, 54, 70, -10, 80, 90, 4, -20, -30, 100];


// let input = parseInt(prompt('Enter a number to search:'));
// let notify = true;
// let position = number;
// for(let i = 0; i < number.length; i++)
// {
//     if(number[i] == input)
//     {
//     notify = true;
//     position = i;
//     break;
//     }
//     else 
//       {
//         notify = false;
//       }
// }
// if (notify === true)

//     console.log(input + ' is found at  ' + [position] );
// else 
// {
//     console.log(input + ' is not found');
// }


// function sum(numbers)
// {
//     let sum = 0;
//     for(let i = 0; i < numbers.length; i++)
//     {
//         sum = sum + numbers[i];
//     }
//     return sum;
// }


// function avg(sum , count)
// {
//     return sum / count;
// }

// min([3, 5, 11, -3, 5, 89]);
// min([1, 9, 13, 2, 8, 15, 89, 112]);
// min([300, 500, 100, 400, 50, 890]);

// let items = [1, 9, 13, 2, 8, 15, 89, 112];

// let a = sum(items);
// console.log('sum is ' + a);

// let b = avg(a, items.length );
// console.log('average is'+ b);

// -----FUNCTIONS ------

// SIMPLE FUNCTION:
function greet(){
    console.log('hello to Js function');
}

greet();

// FUNCTION WITH PARAMETERS:

// function addnumbers(a, b)
// {
//     let sum = a + b;
//     console.log('the sum is: ' + sum);
// }
// addnumbers(5, 10);
// addnumbers(6, 8);
// addnumbers(7, 8);
// multi(7, 9)

// function multi(x, y){
//     let multi = x * y;
//     console.log('the product is:' + multi)
// }
// multi(7, 9)

// function divi(x, y){
//     let divi = x / y;
//     console.log('the divison is:' + multi)
// }
// divi(7, 9)

// function subt(x, y){
//     let subt = x - y;
//     console.log('the subtraction is:' + multi)
// }
// subt(7, 9)

//          FUNCTION WITH USER INPUT:


// function subt(){
//     let num1 = parseInt(prompt('enter first number: '));
//     let num2 = parseInt(prompt('enter second number: '));
//     let division = num1 / num2;
//     console.log( 'the divison is: ' + division)
// }
// subt();


// FUNCTIONS THAT RETURNS A VALUE:

// function square(num){
//     return num * num; sw233
// }
// let result = square(4);
// console.log('the square is : ' + result);


// function runprogram(){
//     let fruit = ['apple','banana','mango'];
//     let choice;

//     while(true){
//         choice = prompt( 'enter a name to search a fruit in our shop: ')

//         if(choice.toLowerCase()=== 'quit'){
//             console.log('exiting program...Goodbye!');
//         break; // stop loop
//     }
//     if(fruit.includes(choice.toLowerCase())){
//         console.log(choice + 'ye we have this fruit');
//     }
//     else{
//         console.log(choice + ' we dont have this fruit');
//     }
// }}
// runprogram();


// function runcar(){
//     let car = ['bmw','audi','toyota', 'forf', 'honda'];
//     let choice;

//     while(true){
//         choice = prompt('enter care name to see if we have it: ');
//         if(choice.toLowerCase()== 'quit'){
//             console.log('program ending.');
//             break;
//         }
//         if(car.includes(choice.toLowerCase)){
//             console.log('Yes! We do have ' + choice + ' in stock!');
//         }
//         else{
//             console.log('Unfortantly, we do not have ' + choice + ' in stock.');
//         }
//     }
// }
// runcar();
