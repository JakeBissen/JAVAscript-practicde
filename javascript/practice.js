// let number = 7;
// if(number % 2 == 0)
// {
//     console.log('the number is even')
// }
// else
// {
//     console.log('the number is odd')
// }

// let age = 71;
// if(age >= 19)
// {
//     console.log('You can vote')
// }
// else
// {
//     console.log('You cannot vote')
// }



// let num = 7;
// if(num = -7)
// {
//     console.log('the number is negative')
// }
// else if(num = 0){
//     console.log('the number is zero')
// }
//     else
//     {
//         console.log('the number is positive')
//     }




// let numb = 66
// if(numb % 5 ==0 && numb % 11 == 0)
// {
//     console.log('it cna be divided by 5 and 11')
// }
// else if(numb % 5 == 0)
// {
//     console.log('it can be divided by 5 only')
// }
// else if(numb % 11 == 0)
// {
//     console.log('it can be divided by 11 only')
// }
// else
// {
//     console.log('it cannot be divided by 5 or 11')
// }


// LOOP QUESTIONS

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// for(let i = 0; i < arr.length; i++){
//     console.log(arr[i]);
// }

// let sum = 5;
// for(let sum = 0; sum <= 50; sum+=5)
// {
//     console.log(sum);
// }



//    IF-ELSE + FOR LOOP QUESTIONS
// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// for(let i = 0; i < numbers.length; i++)
//     {
//         if(numbers[i] % 2 == 0)
//         {
//             console.log(numbers[i] + " is even");
//         }
//         else
//         {
//             console.log(numbers[i] + " is odd");
//         }
//     }

// let num = 7;
// for(let num = 0; num <= 56; num+=7) {
    
//     if(num < 50) {
//         console.log(num);
//     } else {
//         console.log('big number');
//     }
// }

// let num = 1;
// for(let num = 0; num <= 50; num++) {
//     if(num % 3 == 0 && num % 5 == 0) {
//         console.log('FizzBuzz');
//     } else if(num % 3 == 0) {
//         console.log('Fizz');
//     } else if(num % 5 == 0) {
//         console.log('Buzz');
//     } else {
//         console.log(num);
//     }
// }

// let num = 1;
// for(let num = 0; num <= 100; num++) {
//     if(num % 2 == 0){
//         console.log(num);
//     }
// }  


// let num = 0;
// for(let num = 1; num <= 50; num++) {
//     if(num % 2 ==2) {
//         console.log();
//     }
//     else if (num % 3 == 1) {
//         console.log();
// }
// else if (num % 4 == 0) 
//         console.log();
    
//     else if (num % 5 == 0) {

//         }
//         else if (num % 6 == 0) {

//         }
//         else if (num % 7 == 0) {

//         }
//         else if (num % 8 == 0) {

//         }
//         else if (num % 9 == 0) {

//         }
//     else {
        
    
//         console.log(num);
//     }
// }













// for(let num = 1; num <= 50; num++) {
//     if (num < 2) {
//         console.log();
//         continue;
//     }
//     let isPrime = true;
//     for (let i = 2; i <= Math.sqrt(num); i++) {
//         if (num % i === 0) {
//             isPrime = false;
//             break;
//         }
//     }
//     if (isPrime) {
//         console.log(num);
//     } else {
//         console.log();
//     }
// }