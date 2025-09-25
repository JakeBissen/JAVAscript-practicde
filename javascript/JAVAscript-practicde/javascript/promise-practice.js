




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




/// ----------- Good Example ----------////


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


