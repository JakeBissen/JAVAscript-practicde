
// DOM = Docuemnt Orgin Model is used to access html page
// objects should contain properities and matters.


// console.log(document);

// console.log(document.title);

// console.log(document.URL);
// console.log(document.body);


/// ------- SELECTING ELEMENTS -----////

// getElementByID = 1
let mainTitle = document.getElementById('main-title') 
console.log(document.getElementById('main-title').innerText);


mainTitle.innerText = 'hello using DOM';
mainTitle.innerHTML = '<i> Hellow using DOM with style! </i>';

//innertext updates (like using 'inspect') innHTML is elements, and innerText is words.

let mainParagraph = document.getElementById('main-paragraph');
mainParagraph.innerText = 'parapgragph using DOM';
mainParagraph.innerHTML = '<i> Hellow using DOM with style! </i>';




let cards = document.getElementsByClassName('card')
//                     this becomes a list
console.log(cards[0])
console.log(cards[1])

for(let i = 0; i < cards.length; i++)
{
    cards[i].innerText = 'Card ' + (i+1);
}


let listItems = document.getElementsByTagName('li');

for(let i = 0; i < listItems.length; i++)
{
    listItems[i].innerText = 'Item ' + (i+1);
    listItems[i].style.color = 'red';
    listItems[i].style.backgroundColor = 'black';
    listItems[i].style.margin = '10px';
}

let title= document.getElementById('title');
let p = document.getElementById('desc');
let input = document.getElementById('name');
let image = document.getElementById('image');
let buttom = document.getElementById('btn');

console.log(input.value); //use value to get input value
input.value = 'type in me';

title.style.color = 'blue';
title.style.fontFamily = 'Arial';

console.log(image.src);

image.src = 'https://www.boredpanda.com/blog/wp-content/uploads/2023/10/weird-hard-images-cover_800.jpg';
image.style.width = '300px';
image.style.height = '200px';

image.setAttribute('alt', 'random image from internet')


///  ----- HANDLING THE CLICK ---- ////

function click(){
    alert('button clicked');
}




//// ----- APPLYING(CREATING/REMOVING) ELEMENTS ---- /////





