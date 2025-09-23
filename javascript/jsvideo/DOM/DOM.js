
// if you use document 'document.querrySelectorAll' you have to have iteration on the result. Also, it is not an arry. BUT, you can easily turn it into one! 

//                  let text = ' frist, second, third'
// text.split(' '); -- gives you the words /\


debugger;

///1A. console log the content of the list items in seperate lines.

// let list = document.getElementById('list');
// console.log (list); -- bad

let listItems = document.querySelectorAll('li'); 
for(let item of listItems){
    console.log(item.innerText);
}

///1B. console.log the first word of the second paragraph.

// let para = document.querrySelectorAll('ipsum');
// console.log(para); -- bad
console.log('---------------------');

let parapgraphs = document.querySelectorAll('p');
let secondParagraph = parapgraphs[1]; 
let secondParagraphText = secondParagraph.innerText;
let firstWordOfSecondParagraphText = secondParagraphText.split(' ')[0];
console.log(firstWordOfSecondParagraphText);



console.log('---------------------');

///1C. console log the number of parapgraphs.

// let pars= document.querrySelectorTag(p);
// console.log(pars); -- bad

console.log(parapgraphs.length);