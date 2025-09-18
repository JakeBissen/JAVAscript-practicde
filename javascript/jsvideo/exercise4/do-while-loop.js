

let userInput = null;
do{
    userInput = promt('enter a value' );
} while (userInput === null || userInput.length === 0); 
    console.log(userInput + 'is valid');


    /* De Morgan's Laws:
//   !(A && B) <-->!A ||!B
A B                           
F F  T             T
F T  T             T
T F  T             T
T T  F             F

// !(A || B) --> !A && !B
// Check this table for truth equality. Remember to check/complete this before moduel 3 is finished.

