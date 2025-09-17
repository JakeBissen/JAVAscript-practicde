
// math.random if you anumber between 0 and 1, Math.floor if you want an integer
//// Math.floor(Math.random() * 10) + 1; // generates a random number between 1 and 10

let secertValue = Math.random();
//   SOLUTION 1 IF ELSE
if (secertValue === 0) {
    console.log('zero');
} else if (secertValue === 1) {
    console.log('one');
} else if (secertValue === 2) {
    console.log('two');
}else if (secertValue === 3) {
    console.log('three');
 } else (secertValue === 4) {
    console.log('four');
  } 


  ///     SOLUTION 2 SWITCH CASE
switch (secertValue) {
    case 0:
        console.log('zero');
        break;
    case 1:
        console.log('one');
        break;
        case 2:
            console.log('two');
            break;
    case 3:
        console.log('three');
    break;
         default:
            console.log ('four');
        
}

/// SOLUTION 3 using a dictionary

let dict = {
    '0': 'zero',
    '1': 'one',
    '2': 'two',
    '3': 'three',
    '4': 'four',
}
console.log(dict[secertValue]);

