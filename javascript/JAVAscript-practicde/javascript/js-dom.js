
// DOM = Docuemnt Orgin Model is used to access html page
// objects should contain properities and matters.


// console.log(document);

// console.log(document.title);

// console.log(document.URL);
// console.log(document.body);


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
//                    this becomes a list
console.log(cards[0])
console.log(cards[1])

for(let i = 0; i < cards.length; i++)
{
    cards[i].innerText = 'Card' + (i+1);
}


