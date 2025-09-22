
// 1. 
// for (i = 0; i <= 10; i++){
//     if (i % 2 == 1){
//         console.log('odd');
//     } else
//         console.log('even');

// }




//// -----QUESTION 2 ------/////
// let x = parseInt(prompt('enter number one: '));
// let y = parseInt(prompt('enter number two: '));
// let sum = x + y;
// let sub = x - y
// let mul = x * y;
// let div = x / y;
// let pemdas = [sum, sub, mul, div];
//  console.log (pemdas);



///// -----QUESTION 3------/////

// for (i = 0; i <= 20; i++){
//     console.log(i)

// }



////// ---------- QUESTION 4 ---------////////
//     for( i = 1; i <= 30; i ++) {
//            if ((i % 3 == 0) && (i % 5 == 0)) {
//         console.log('Fizzbuzz');
//     } else if ((i % 3 == 0) && (i % 5 == 1)){
//          console.log('Fizz');
//     } else if ((i % 3 == 1) && (i % 5 == 0)){
//          console.log('Fizz')
//     } else {
//         console.log(i)
//     }
// }
       

    ///// ----- QUESTION 5 -----/////
    // let pick = parseInt(prompt('pick a number 1-7: '));
    //     switch(pick){
    //         case 1: 
    //         console.log ('Monday');
    //         break;
    //         case 2: 
    //         console.log ('Tuesday');
    //         break;
    //         case 3: 
    //         console.log ('Wednesday');
    //         break;
    //         case 4: 
    //         console.log ('Thursday');
    //         break;
    //         case 5: 
    //         console.log ('Friday');
    //         break;
    //         case 6: 
    //         console.log ('Saturday');
    //         break;
    //         case 7: 
    //         console.log ('Sunday');
    //         break;
    //         default:
    //         console.log('Invalid number');
    //         break;
    //     }





///// -------- QUESTION 6 --------////////

// let number = parseInt(prompt('enter a number'))
// function inputs(number){
//     let numbers = Math.sqrt(number);
// console.log(numbers);
// }
// inputs(number); 


///// ------- QUESTIONS 7 ---------/////////

// function runprogram(){
//     let fruit = ['apple','orange','mango', 'melon', 'kiwi'];
//     let choice;
//         choice = prompt( 'enter a name to search a fruit in our shop: ')
//     if(fruit.includes(choice)){
//         console.log(choice + ' we have this fruit');
//     }
//     else{
//         console.log(choice + ' we dont have this fruit');
//     }
// }
// runprogram();



///// --------Question 8 -------//////

// let student = {
//     name: 'Joe',
//     grade: 'C',
//     showInfo: function() {
//         console.log(`Name: ${this.name}, Grade: ${this.grade}`);
//     }
// };
// student.showInfo();




///// ----- QUESTION 9 ------//////
// let library = {
//     books: [ 'The book', 'The book of books', 'Placeholder book', 'Book of many things'],
// }
// console.log(`${this.books}`);


//// ------ QUESTION 10 -----////

// let students = [
//   {name: "beth", marks: 43},
//   {name: "ron", marks: 99},
//   {name: "joe", marks: 85}, 
// ];
// students.forEach(student => {
//     let name = student.name;
//     let marks = student.marks;
//     let score;

//     if (marks >= 89){
//         score = 'A';
//         console.log(name + ' scored ' + marks + ' and they made an ' + score);
//     } else if (marks >= 70){
//         score = 'B';
//         console.log(name + ' scored ' + marks + ' and they made a ' + score);
//     } else if (marks >= 60){
//         score = 'C';
//         console.log(name + ' scored ' + marks + ' and they made a ' + score);
//     } else {
//         score = 'F';
//         console.log(name + ' scored ' + marks + ' and they made an ' + score);
//     }
// });




////// ---------- QUESTION 11 -----------/////
/// I will be honest. I had to look up some examples for this. I plan on going back to this during the weekend and working on it without looking at notes as I did for the other questions. ////

let balance = 1000;
let quit = true;

while (quit) {
  let choice = prompt(
    '1. Check Balance' +
    '2. Deposit Money' +
    '3. Withdraw Money' +
    '4. Quit' 
  );

  if (choice === null) {
    console.log("Operation cancelled. Exiting.");
    break;
  }

  switch (choice) {
    case "1":
      console.log(`Your balance is ${balance}`);
      break;

    case "2":
      let deposit = prompt("Enter amount to deposit:");
      deposit = Number(deposit);
      if (isNaN(deposit) || deposit <= 0) {
        console.log("Invalid deposit amount.");
      } else {
        balance += deposit;
        console.log(`Deposit successful. Balance = ${balance}`);
      }
      break;

    case "3":
      let withdraw = prompt("Enter amount to withdraw:");
      withdraw = Number(withdraw);
      if (isNaN(withdraw) || withdraw <= 0) {
        console.log("Invalid withdraw amount.");
      } else if (withdraw > balance) {
        console.log("Insufficient balance.");
      } else {
        balance -= withdraw;
        console.log(`Withdraw successful. Balance = ${balance}`);
      }
      break;

    case "4":
      console.log("Thank you for using the ATM. Goodbye!");
      quit = true;
      break;

    default:
      console.log("Invalid choice. Please enter a number between 1 and 4.");
  }
}
