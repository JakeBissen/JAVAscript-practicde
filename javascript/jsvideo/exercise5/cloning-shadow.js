
//put into Python.tutor
// function plusOne (value, num){
//     let internalValue = Object.assign({}, value);
//     internalValue.x += 1;
//     num += 1;
//     console.log(value, num);
// }

// let val= {x: 1};
// let num = 1;
// plusOne(val, num);
// console.log(val, num);



// let dbTable = [
//     {first: 'A', last: 'B'},
//     {first: 'C', last: 'D'},
// ];



// function logChangeRecords(records){
//     for (let record of records){
//         record.title = 'Ms';
//     }
//     console.table(dbTable);
// }

// logChangeRecords(dbTable);

// console.log(dbTable);


// ----- SHADOW COPYING----------//
// Shadow copying only affects the top most layer.

// let dbTable = [
//     {first: 'A', last: 'B'},
//     {first: 'C', last: 'D'},
// ];


// function logChangeRecords(records){
//     let internalRecords = [...records];
//     for (let record of internalRecords){
//         record.title = 'Ms';
//     }
//     console.table(internalRecords);
// }

// logChangeRecords(dbTable);

// console.log(dbTable);




/// ------ STRUCTURED CLONING-------////
// deep cloning affects data on all levels.



// let dbTable = [
//     {first: 'A', last: 'B'},
//     {first: 'C', last: 'D'},
// ];



// function logChangeRecords(records){
//     let internalRecords = structuredClone(records);
//     for (let record of internalRecords){
//         record.title = 'Ms';
//     }
//     console.table(internalRecords);
// }

// logChangeRecords(dbTable);

// console.log(dbTable);



/// use 'JSON.stringify(dbTable)' to use in Python.tutor//
// JSON.parse(JSON.stringify())





// let dbTable = [
//     {first: 'A', last: 'B'},
//     {first: 'C', last: 'D'},
// ];


// function logChangeRecords(records){
//     let internalRecords = [...records];
//     for (let record of internalRecords){
//         record.title = 'Ms';
//     }
//     console.table(internalRecords);
// }

// logChangeRecords(dbTable);

// console.table(dbTable);


////// ------- DEFAULT ARGUMENTS ------ //////
// function sumArr([head, ...tail]){
//     if (typeof head === 'undefined') return 0;
//     return head + sum(tail);
// }

sumArr([1, 2, 5])


function sumArr([head, ...tail], prevSum = 0){
    if (typeof head === 'undefined') return prevSum;
    return sumArr(tail, head + prevSum);
}
sumArr([1, 2, 5])
