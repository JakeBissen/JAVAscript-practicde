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


// function getMove() {
//     const value = Math.random();
//     return(
//         value < 0.2 ? 'x' :
//         value < 0.4 ? 'O' :
//         null
//     );
// }

// const board = new Array(20).fill(null).map(
//     () => new Array(20).fill(null).map(getMove)
// )


// const container = document.querySelector('.js-container');

// function renderRow(rowData){
//     let rowHtml = '<tr class="tic-tac-toe-row">';

//     for (let cell of rowData){
//         rowHtml += `<td class="tic-tac-toe-cell">${cell === null ? ' ' : cell}</td>`
//     }
//     rowHtml += '</tr>';
//     return rowHtml;
// }
// function renderBoard(board){
//     let html = '<table class="tic-tac-toe-board"> <tbody>';

//     for (let row of board){
//         html += renderRow(row);
//     }
//     html += '</tbody.</table>';
//     return html;
// }

// let html = renderBoard(board);


//// Creating the html for the tic-tack-toe board
// container.innerHTML = html;




/////--------- NEW BETTER CODE --------////////


function resetGame(){
const board = new Array(20).fill(null).map(
    () => new Array(20).fill(null)
);
let nextMoveSymbol = 'X';
return [board, nextMoveSymbol];
}
/// a tuple is an arrey of fixed length

let [board, nextMoveSymbol] = resetGame()
// the let is a pointer to the tuple.

function containerAreaClicked(event){
    let dataset = event.target.dataset; 
    if (
        typeof dataset.row === 'undefined' || 
        typeof dataset.col === 'undefined'
    ){
        return;
    }

    const {row, col} = dataset;

    if (board[row][col] === null){
         board[row][col] = nextMoveSymbol;
    nextMoveSymbol = nextMoveSymbol === 'X' ? 'O' : 'X';
    renderBoard();
    }
    // if it was x before, it will now be o. Otherwise it will be x.
}

const container = document.querySelector('.js-container');
container.addEventListener('click', containerAreaClicked)

function renderRow(rowData, rowIndex){
    let rowHtml = '<tr class="tic-tac-toe-row">';

    for (let i = 0; i < rowData.length; i++){
        let cell = rowData[i];
        let columnIndex = i;
        rowHtml += 
        `<td class="tic-tac-toe-cell" 
        data-row = "${rowIndex}" 
        data-col="${columnIndex}">
        ${cell  ?? ' '}
        </td>`
    }
    rowHtml += '</tr>';
    return rowHtml;
}
function renderBoard(){
    let html = '<table class="tic-tac-toe-board"> <tbody>';

    for (let i = 0; i < board.length; i++){
        let row = board[i];
        html += renderRow(row, i);
    }
    html += '</tbody.</table>';

    container.innerHTML = html;

}

let html = renderBoard(board);

document
    .querySelector('.js-new-game')
    .addEventListener('click', () => {

        [board, nextMoveSymbol] = resetGame();
        renderBoard();
    });



