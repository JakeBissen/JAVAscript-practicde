// let a = 15;

// let b = parseInt( prompt("Enter a number:"));
// // default value is a string, so we need to convert it to a number
// // let z = 21;
// // let c = parseInt(prompt("Enter another number:"));
// // console.log(z + b);

// if(a > 10)
// {
//     console.log(a + "a is greater than 10");
// }
// else
// {
//     console.log(a + "a is not greater than 10");
// }


// let per = prompt("Enter the percentage: ");

// if(per >= 70 && per < 80)
// {
//     console.log("B grade");
// }
// else if( per >= 80 && per < 90) // called if else letter
// {
//     confirm("A grade");
// }
// else if(per >= 90)
// {
//     console.log("A+ grade");
// }
// else
// {
//     console.log("fail");
// }


// let username = prompt("Enter your name: ");
// let password = prompt("Enter your password: ");

// if(username == "admin")   
// {
//     if (password == "admin123")
//     {
//         console.log("Login successful");
//     }
//     else
//     {
//         console.log("wrong password! Login failed");
//     }

// }
// else
// {
//     console.log("Wrong username! login failed");
// }




// let a = parseFloat(prompt("Enter number 1: "));
// let b = parseFloat(prompt("Enter number 2: "));
// let c = parseFloat(prompt("Enter number 3: "));

// if (a > b && a > c) 
//     {
//     console.log(a + " is the largest number");
// } 
// else if (b > a && b > c) {
//     console.log(b + " is the largest number");
// } 
// else if (c > a && c > b) {
//     console.log(c + " is the largest number");
// } 
// else {
//     console.log("All numbers are equal");
// }

// let a = parseInt(prompt("Enter numer 1:"));
// let b = parseInt(prompt("Enter numer 2:"));
// let c = parseInt(prompt("Enter numer 3:"));
// if(a > b && a > c)
// {
//     console.log(a + " is greatest");
//     if(b > c)
//     {
//         console.log(b + " is second greatest");
//         console.log(c + " is smallest");
//     }
//     else
//     {
//         console.log(c + " is second greatest");
//         console.log(b + " is smallest");
//     }
// }
// else if(b > a && b > c)
// {
//     console.log(b + " is greatest");
//     if(a > c)
//     {
//         console.log(a + " is second greatest");
//         console.log(c + " is smallest");
//     }
//     else
//     {
//         console.log(c + " is second greatest");
//         console.log(a + " is smallest");
//     }
// }
// else if(c > a && c > b)
// {
//     console.log(c + " is greatest");
//     if(a > b)
//     {
//         console.log(a + " is second greatest");
//         console.log(b + " is smallest");
//     }
//     else
//     {
//         console.log(b + " is second greatest");
//         console.log(a + " is smallest");
//     }
// }


// for(let i = 1; i <= 20; i+=2) // i= tracter
// {
//     console.log('JS' + i); 
// }

// for(let i = 12; i >= -30; i-=3)
// {
//     console.log('w' + i)
// }

// let a = parseInt(prompt("Start of Loop:"));
// let c = parseInt(prompt("End of Loop:"));

// for(let d = a; d <= c; d++) // 'd' runs the loop
// {
//     if (d % 7 == 0)
//     {
//         console.log('seven ' + d)
//     }
// }


//print even odd umbers using if else

// check if a number is positive or negative.

// let num = 5;

// if(num > 0)
// {
//     console.log('the number is positive');

// }
// else{
//     console.log('the number is negative');
// }


// //check voting eligibility.

// let age = 16;

// if(age >= 18)
//     {
//         console.log('you are eligible to vote');
//     }
//     else{
//         console.log('you are not eligible to vote');
//     }

// //print even odd numbers using if else

// let number = 7;
// if (number % 2 == 0)
//     {
//         console.log("even number");
//     }
//     else
//     {
//         console.log('odd numbers');
//     }

// //check password length

// let password = "12345";
// if(password.length >= 6)
//     {
//         console.log("password is strong");
//     }
//     else
//     {
//         console.log("password is too short");
//     }

//     //grade check

//     let grade = 95;

//     if(grade >= 90)
//     {
//         console.log("grade is A");
//     }
//     else if(grade >= 75)
//     {
//         console.log("grade is B");
//     }
//     else if(grade >= 60)
//     {
//         console.log("grade is C");
//     }
//     else
//     {
//         console.log('grade is f');
//     }

// print even and odd numbers

// for (let i = 10; i <= 1; i--)
// {
//     if(i % 2 == 0)
//     {
//         console.log(i + " is even");
//     }
//     else
//     {
//         console.log(i + " is odd");
//     }
// }

// find number greater than 50

// let numb = [10, 55, 32, 80, 95]

// for (let i = 0; i < numb.length; i++)
// {
//     if(numb[i] > 50)
//         {
//         console.log(numb[i] + ' is greater than 50');
//     }
//     else 
//         console.log(numb[i] + ' is not greater than 50');
// }

// print pass or fail

// let marks = [35, 60, 80]
// for(let i = 0; i < marks.length; i++)
// {
//     if(marks[i] >=50)
//     {
//         console.log('student ' +(i+1)+ ' passes');
//     }
//     else
//         console.log('student ' +(i+1)+ ' fails');
// }



// let colors = ['red', 'blue', 'green', 'yellow', 'orange', 'purple', 'white', 'pink']; // array 

// // console.log(colors[3]);

// // console.log(colors[6]); 

// console.log(colors.length); // length of the array

// for (let i = colors.length - 1; i >= 0; i--) {
//     console.log(colors[i]);
// }



//              WHILE LOOP

// let i = 0;
// while(i < 10) 
// {
//     console.log('hello' + i);
//     i++;
// }

// while(true)
// {
//     let number = parseInt(prompt("Enter a number:"));
//     if(number == 0)
//     {
//         break;
//     }
//     else
//     {
//         console.log('you entered:' + number);
//     }
// }

// let colors = ['red', 'blue', 'green', 'yellow', 'orange', 'purple', 'white', 'pink'];

// colors.push('brown'); // .push adds an element at the end of the array

// console.log(colors);




// let number = [10, 3, 30, 140, 50, 54, 70, -10, 80, 90, 4, -20, -30, 100];

// let min = number[0]; 

// for(let i = 0; i < number.length; i++)
// {
//     if(min < number[i])
//     {
//         min = number[i];
//     }
// }
// console.log('minimum number is '+ min);


// let sum = number[0]; 

// for(let i = 0; i != number.length; i++)
// {
//     if(sum != number)
//     {
//         sum = i + sum;
//     }
// }
// console.log('Sum is '+ sum);

 
// let min = number[0]; 
// let sum = 0;
// let avg = sum/number.length;
// for(let i = 0; i < number.length; i++)
// {
//     if(min > number[i])
//     {
//         min = number[i];
//     }
//    sum = sum + number[i];
// }
// console.log('minimum number is '+ min);
// console.log('sum is '+ min);
// console.log('average is '+ (sum/number.length);

// let number = [10, 3, 30, 140, 50, 54, 70, -10, 80, 90, 4, -20, -30, 100];


// let input = parseInt(prompt('Enter a number to search:'));
// let notify = true;
// for(let i =  0; i < number.length; i++)
// {
//     if(number[i] == input)
//     {
//     notify = true;
//     break;
//     }
//     else 
//       {
//         notify = false;
//       }
// }
// if (notify === true)
// {
//     console.log(input + ' is found');
// }
// else 
// {
//     console.log(input + ' is not found');
// }




// let number = [10, 3, 30, 140, 50, 54, 70, -10, 80, 90, 4, -20, -30, 100];


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

// and make keep the position as 0 or -1 at the start


