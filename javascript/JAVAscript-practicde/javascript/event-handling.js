

function clickA(){
    alert('button A clicked');
}


function clickB(){
    alert('button B clicked');
}
// document.getElementById('btn1').addEventListener('click', clickA); 
// double click \/
document.getElementById('btn1').addEventListener('click', clickA); 
document.getElementById('btn2').addEventListener('click', clickB); 
// user santex fucntion


// when clicked, this happens = what the function does!
// document.getElementById('btn2').addEventListener('click' , () => {
//     alert('click and performed via arrow function')
// })

// document.getElementById('btn3').addEventListener('click' , function(){
//     alert('called via anomuns function');
// })
// document.getElementById('btnRemove').addEventListener('click' , () => {
//     alert('event listeners removed');
//     document.getElementById('btn1').removeEventListener('dblclick', clickA);
//     document.getElementById('btn2').removeEventListener('click', clickB); 
// })


///// use stopPropagation to stop inner/outer from being clicked. IE, only the inner div gets clicked or only the outer. inner div is a child of the main div. 

let container = document.getElementById('container');

container.addEventListener('click' , (event) => {
    console.log('container clicked!' + event.target + 'event type:'  + event.type);
})

let innerDiv = document.getElementById('innerDiv');
innerDiv.addEventListener('click' , (event) => {
    console.log('Inner Div Clicked!' + event.target + 'event type:' + event.type);
    event.stopPropagation();
})

let innerBtn = document.getElementById('btnInn');
innerBtn.addEventListener('click' , (event) => {
    alert ('inner button clicked')
    console.log('only inner button clicked'); //optional
    event.stopPropagation();
})

let input = document.addEventListener('input' , (event) => {
    document.getElementById('preview').innerText = event.target.value;
})


// let inputs = document.addEventListener('inputsss' , (event) => {
//     document.getElementById('previewsss').innerText = event.target.value;
// })  experiemnt


