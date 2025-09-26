
function firstScenario() {
    var firstPromise = new Promise((resolve, reject) => {
        setTimeout(() => resolve(110), 1000);
    });

    var secondPromise = new Promise((resolve, reject) => {
        setTimeout(() => resolve(120), 2000);
    });

    var thirdPromise = new Promise((resolve, reject) => {
        reject('Error message');
    });

    Promise.all([firstPromise, secondPromise, thirdPromise])
        .then(value => {
            console.log('Success:', value);
        })
        , reason => {
            console.log('Error:', reason);
        };
}

firstScenario();


function secondScenario() {
    var firstPromise = new Promise((resolve, reject) => {
        setTimeout(() => resolve(110), 1000);
    });

    var secondPromise = new Promise((resolve, reject) => {
        setTimeout(() => resolve(120), 2000);
    });

    var thirdPromise = new Promise((resolve, reject) => {
        setTimeout(() => resolve(120), 3000);
    });

    Promise.all([firstPromise, secondPromise, thirdPromise])
        .then(value => {
            console.log('fulfilled:', value);
        })
        ,  reason => {
            console.log('Error:', reason);
        };
}

secondScenario();



function thirdScenario() {
    var firstPromise = new Promise((resolve, reject) => {
        setTimeout(() => resolve(110), 1000);
    });

    var secondPromise = new Promise((resolve, reject) => {
        setTimeout(() => resolve(120), 2000);
    });

    var thirdPromise = new Promise((resolve, reject) => {
        reject('Error message');
    });

    Promise.allSettled([firstPromise, secondPromise, thirdPromise])
        .then(value => {
            console.log('fulfilled:', value);
        })
        , reason => {
            console.log('Error:', reason);
        };
}

thirdScenario();
// promis.allsettled is recommended