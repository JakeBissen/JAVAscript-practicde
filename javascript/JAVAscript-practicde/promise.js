

// promise represents the eventual failure or sucess of a task. Notifies you if it succeeds or fails.
// object reperasting a function or task, and its completion. 
// acts like a debugger but lets the code run

function getData(success)
{

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(success == true){
                resolve ({name: 'Jake' , age: 20})
                //treat these as functions
            }
            else{
                reject('error:unable to fetch data.')
            }
        }, 2000);
    })
}

getData(true).then(console.log).catch(console.log); 

getData(false).then(console.log).catch(console.log); 



////--------- JSON -------- /////////
//JSON - javascript object notation
//every program and programmer uses this JSON to share information even if they are different coding languages

// let jsonString = `[{
// "id": 1, "name": "Leanne Graham",
//  "username": "Bret",
//  "email": "Sincere@april.biz"
// }`;
    
// let jObject = JSON.parse(jsonString);

// console.log(jObject.id);
// console.log(jObject.email);



// let jsonString = `[{
//     "id": 1, "name": "Leanne Graham",
//     "username": "Bret",
//     "email": "Sincere@april.biz"
// },"id": 2, "name": "jake",
//     "username": "jake",
//     "email": "jake@april.biz"]`;
    
// let jObject = JSON.parse(jsonString);

// console.log(jObject[1].id);
// console.log(jObject[1].email);


/// ---- how to convert into JSON -----/////
let person = {
    name: 'lusis',
    age: 30,
    email: 'luis@gmail.com'
}


let jsonPersonString = JSON.stringify(person);

console.log(jsonPersonString);


/// https://jsonplaceholder.typicode.com/users --- this is a API known as an endpoint address. It loads all the users, as well a indivual users
// https://jsonplaceholder.typicode.com/users/1 brings up user 1 only.

// https://jsonplaceholder.typicode.com/posts
// 




// document.getElementById('loadUserButton').addEventListener('click', () => {
//     fetch('https:jsonplaceholder.typicode.com/users').then(reponse => console.log(reponse.json()))
// })

document.getElementById('loadUserButton').addEventListener('click', () => {
    fetch('https://jsonplaceholder.typicode.com/users').then((response) => {
        
        return response.json();
    }).then(data => {
        console.log(data)
        for (let i = 0; i < data.length; i++){
             document.getElementById('data').innerHTML += `Name is: ${data[i].name} and Email is: ${data[i].email}<br>`;
        }
    });
})
// Formal format
// ok === true

// this code acts like a json converter into javascript

// only use APIs that have https- yes, CORS- no, AUTH- no.

//when we use async, the promise is already resolved so we dont need to use 2 '.then' statements. 
// it can be quite tricky to cause an image to appear first than the 'alert'. Take notes and watch examples. Also, time events/timers are not the best as they can be out of order, so use 'async' instead for more accurate information to be displayed. 


let nameOfImage = null;
document.getElementById('btnLoadCoffee').addEventListener('click', async () => {
  let response = await fetch('https://foodish-api.com/api/images/burger')

    let data = await response.json();

    console.log(data);
    console.log(data.image)
    nameOfImage = data.image;

    document.getElementById('image-name').textContent = data.image
    
    let img = document.getElementById('image');
    img.setAttribute('src' , data.image);
    img.onload = async() => {
         
    }
    console.log(nameOfImage);

    })
    












    