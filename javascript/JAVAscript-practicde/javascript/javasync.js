

// threading can block eath other when there are too many processes. Sync will ensure they work side by sidie instead of over each other. 

// Syncingzation blocks overlapping code and excutes it line by line to ensure they all work. First code finishes and then the second. The second runs in the background. 


// Async skips while Sync doesn't. 

// synchronus code
console.log('start');
console.log('middle');
console.log('end');

// asynchronus code
// setTimeout is not the best way to wait the execution
console.log('start');
setTimeout(() => console.log('middle, execution paused'), 5000);
console.log('end');
for(let i = 0; i<10; i++){
    console.log(i);
}


////// ---------------------------------------- /////

let query = document.getElementById('query');
let result = document.getElementById('result');

let timerId = null;

query.addEventListener('input', () => {
    let value = query.value;
    result.textContent = 'Searching...';
    if(timerId){
        clearTimeout(timerId);
    }
    timerId = setTimeout(() => {
        result.textContent = `Search result for "${value}" (simulated)`;
        timerId = null; 
    }, 5000)
});



//timeout pauses while interval stops.


// if(timerId){
    //     clearTimeout(timerId);
    // } allows the timer to reset at 5 instead of adding on top of it.


// ) => {
//         result.textContent = `Search result for "${value}" (simulated)`;
//         timerId = null; 


// ---------- CALLBACK FUNCTION ---------//////


let counter = 0;
console.log('counter started');
let timerInterval = setInterval(() => {
    counter++;
    console.log(`Counter: ${counter}`);
    if(counter == 5)
    {
        clearInterval(timerInterval)
        console.log('counter stopped');
    }
}, 3000);




