// 1. 
  ///// ----- FIBONACCI ------ //////
  /* DEFINITION
  fib() is 0.
  fib(1) is 1.
  fib(n) is fib(n-1) + fib(n-2) for n>=2.
  */

// function fib(n){
//     if (n === 0) return 0;
//     if (n === 1) return 1;
//     return fib(n-1) + fib(n-2);
// }

// // use the bottom one if you want arrows//
// let fibArrow = n =>
//     n === 0 ? 0 :
//     n === 1 ? 1 :
//     fib(n-1) + fib(n-2);

// console.log(fib(7));
// console.log(fibArrow(7));
// console.log(fib(15));
// console.log(fibArrow(15));


// 2.
    // let arr = [1, 2, 5];

    // function incrementValues(list){
    //     list = [...list]; // shallow copy -  outside world stays intact.
    //     for (let i in list){
    //         list[i] += 1;
    //     }
    //     console.log('inside', list);
    // }

    // incrementValues(arr);
    // console.log('outside', arr);


    //3. 

//     let days = [
//         'Sunday', 
//         'Monday', 
//         'Tuesday', 
//         'Wednesday', 
//         'Thursday', 
//         'Friday', 
//         'Saturday'
//     ];

//         /// they do not need the same name.///

//     function toUlMarkup(list){
//         let html = '<ul>';
//         for (let item of list){
//             html += `<li>$(item)</li>`;
//         }
//         html += '</ul>';
//         return html;
//     }

//     console.log(toUlMarkup(days));


//     // This was not the exercise, this was just a demo.
// let container = document.querySelector('.js-container')
// container.innerHTML = toUlMarkup(days);
