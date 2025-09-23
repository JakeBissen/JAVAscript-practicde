/* 
    Console.log the second and furth list item inside the second section only.
files with js- will go to javascript, and the ones without will go to css. Use this for formating and organanization.
*/

// A. allowed to use the class 'js-second-section'

// document.querySelector('.js-second-section > .js-item-list > li: nth-child(2n)')
// 2n = count by increaments of 2

// const selectedListItemsA = document.querySelectorAll(
//     '.js-second-section > .js-item-list > li:nth-child(2n)'
// ); 
// for (let item of selectedListItemsA){
//     console.log(item.innerText);
// }

// //could use as an arry
// // [...document.querySelectorAll(
// //     '.js-second-section > .js-item-list > li:nth-child(2n)')]
// //     .map(item => item.innerText)
// //     .join('\n');
// //however, this is a node list, and so map would not work





// // B. Not o use the class 'js-second-section', but allowed to use the class 'js-second-section-title'

// const selectedListItemsB = document.querySelectorAll(
//     '.js-second-section-title ~ .js-item-list > li:nth-child(2n)'
// ); 
// for (let item of selectedListItemsB){
//     console.log(item.innerText);
// }


//// ---------------------------------- ///////


function getMove() {
    const value = Math.random();
    return(
        value < 0.2 ? 'x' :
        value < 0.4 ? 'O' :
        null
    );
}

const board = newArray(20).fill(null).map(
    () => new Array(20).fill(null).map(getMove)
)


