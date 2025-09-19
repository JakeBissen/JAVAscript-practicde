

function getCoefficient(name){
    let value = null
      do {
        let str= prompt(`Enter co-efficient ${name}`);
        value = Number.parseFloat(str);
    } while (Number.isNaN(value) || typeof value !== 'number');
    return value;
}

function getCoefficients(){
    let a = getCoefficient('a');
    let b = getCoefficient('b'); 
    let c = getCoefficient('c')
    return [a, b, c];
}


function getDiscriminant(a, b, c){
    return b**2 - 4*a*c;
}

// let getDiscriminant= (a, b, c) => b**2 - 4*a*c;
// another option of writing
function printQuadraticSolutions(a, b, c){
    let discriminant = getDiscriminant(a, b, c);
    let discriminantSqrt = Math.sqrt(discriminant);
    let solution1 = (-b + discriminantSqrt) / 2 / a;
    let solution2 = (-b - discriminantSqrt) / 2 / a;
    console.log(
        `This equation has two solutions: ${solution1} and ${solution2}`
    );
}
// Math.sqrt is you square root
function printSingleSolution(a, b){
    console.log(`This equation has one solution: ${-b / 2 / a}`);
}


function printComplexSolutions(){
    console.log ('This equation has complex solutions.')
}




function quadraticEquation(){
    let tolerance = 1e-9; //10 to the power of 9
     // step 1: get a, b, c (co-efficients)
    let [a, b, c] = getCoefficients();
    //step 2: calculte b**2 - 4*a*c
    let discriminant = getDiscriminant(a, b, c);
    // step 3: determind how many solutions the equation has and find the solution
    if (discriminant > tolerance){
        printQuadraticSolutions(a, b, c);
    } else if (discriminant < -tolerance){
        printComplexSolutions();
    } else {
       printSingleSolution(a, b);
    }
}