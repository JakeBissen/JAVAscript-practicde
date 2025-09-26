for(let i = 1; i <= 20; i++){
    if(i % 3 === 0 && i % 5 === 0){
        console.log('fizzbuzz');
    }
    else if (i % 3 === 0)
        {
            console.log('Fizz');
    }
    else if (i % 5 === 0)
    {
        console.log('buzz');
    }
    else {
        console.log(i);
    }
}


function checkEvenOdd(num){
    if(num % 2 === 0){
        console.log ('even');
    }
    if (num % 2 === 1){
        console.log('odd');
    }

}
let input = prompt('enter number');

checkEvenOdd(Number(input));



let student = {
    name: 'Jake',
    age: '20',
    grade: '89'
}

console.log( student.name);
console.log( student.age);
console.log(student.grade);

student.subject= 'Javascript';

console.log(student);





let text = document.getElementById('text')
function htmlText(){

text.textContent = 'welcome to JAvascript DOM!';

}



let homeworkDone = true;

let checkhomeWork = new Promise((resolve, reject) => {
        if(homeworkDone === true){
            resolve('Great Job!');
        }
        else {
            reject ('Please complete your Homework')
        }
    });

    checkhomeWork.then(resolve => {
        console.log(resolve);
    })
    .catch(reject => {
        console.error(reject); 
    })



