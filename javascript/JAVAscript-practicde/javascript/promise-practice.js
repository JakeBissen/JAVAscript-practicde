
// in syncous, code runs line by line. The next line waits for the previous line to finish. 

// In acynous, 



//// ------- practice 1 ----------/////


function getNumber(resolve, reject){
    return new Promise((resolve, reject) => {
        let randomNum = Math.random();
        if(randomNum >= .5){
            resolve(`Data fetched successful ${randomNum}`);
        }
        else {
            reject (`Failed to fetch data! ${randomNum}`)
        }
    });
}

getNumber(true).then(console.log).catch(console.log); 



///// -------- Practice 2 ------- ////////

function waitThreeSeconds(resolve){
        return new Promise ((resolve) => {
            setTimeout(() => {
                if (resolve){
                    resolve("Task completed!");
                } 
            }, 3000);
        });
    }


waitThreeSeconds(true).then(console.log).catch(console.log); 



//// ----------- Practice 3 ----------- /////


function multiSteps(resolve){
     function multiSteps(){
        return new Promise ((resolve) => {
          console.log("Step 1 done");
          console.log("Step 2 done.");
                    resolve("All Steps Completed!");
                });
            } };
    
console.log(multiSteps);




/// ----------- Good Examples ----------////


// const task1promise = new Promise((resolve, reject) => {
//     let rand = Math.random();
//     if (rand > 0.5) {resolve('TASK 1: Data fetched successfully')}
//     else {reject('TASK 1: Failed to fetch data')}
// });
// const task2promise = new Promise((resolve, reject) => {
//     setTimeout(() => {resolve('TASK 2: Task completed')} , 3000)
// });
// const task3promises = new Promise((resolve, reject) => {
//     resolve();
// });
// task1promise.then(console.log).catch(console.log);
// task2promise.then(console.log);
// task3promises.then(console.log('TASK 3: Step 1 completed')).then(console.log('TASK 3: Step 2 completed')).then(console.log('TASK 3: All steps completed'));



////// ---------- GOOD EXAMPLES --------///////


// let promise = new Promise((resolve, reject) => {
//   let success = true; // change to false to test reject
//   if (success) {
//     resolve(" Task completed successfully!");
//   } else {
//     reject(" Task failed!");
//   }
// });
// promise
//   .then((message) => {
//     console.log(message);
//   })
//   .catch((error) => {
//     console.log(error);
//   });


// //   TASK 2:
//   function fetchData() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("Data fetched from server!");
//     }, 2000);
//   });
// }
// fetchData().then((data) => console.log(data));

// //task 3:
// function step1() {
//   return new Promise((resolve) => {
//     setTimeout(() => resolve("Step 1 done"), 1000);
//   });
// }
// function step2() {
//   return new Promise((resolve) => {
//     setTimeout(() => resolve("Step 2 done"), 1000);
//   });
// }
// function step3() {
//   return new Promise((resolve) => {
//     setTimeout(() => resolve("Step 3 done"), 1000);
//   });
// }
// step1()
//   .then((msg) => {
//     console.log(msg);
//     return step2();
//   })
//   .then((msg) => {
//     console.log(msg);
//     return step3();
//   })
//   .then((msg) => {
//     console.log(msg);
//   });




