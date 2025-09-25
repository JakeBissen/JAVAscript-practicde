
// eventual excution of a feature/function

//// -------typical syntex of a  resolved promise -----/////
// let resolvedPromise = new Promise (function(resolve, reject){
//     //call resolve( value ) to resolve a promise
//     resolve('value');
// });

// // call reject ( reason ) to reject a promise
// let rejectedPromise = new Promise ( (resolve, reject) => reject ('error') );

// // Create a resolved promise
// let immediatelyResolvedPromise = Promise.resolve('immediately resolved value' );


// resolvedPromise.then(console.log);
// rejectedPromise.then(console.log).catch(console.warn);
// immediatelyResolvedPromise.then(console.log);





////// ---------- Optional way ----------////////


// function resolvedPromiseCallback(resolve, reject){
//     resolve ('value');
// }

// // call reject ( reason ) to reject a promise
// let resolvedPromise = new Promise ( resolvedPromiseCallback);

// let rejectedPromise = new Promise ( (resolve, reject) => reject ('error') );

// // Create a resolved promise
// let immediatelyResolvedPromise = Promise.resolve('immediately resolved value' );


// resolvedPromise.then(console.log);
// rejectedPromise.then(console.log).catch(console.warn);
// immediatelyResolvedPromise.then(console.log);
// console.log.warn displays as a warning


//// -----------------------------------------/////




