// -------SIMPLE OBJECT WITH PROPERTIES-------

// let student = {
//     name: 'jake',
//     age: '20',
//     course: 'software engineering', 
// };

// console.log('Name: ' + student.name);
// console.log('age: ' + student.age);
// consule.log('course: ' + student.course);

// -------OBJCET WITH METHOD (FUNCTION)-------

let car = {

    brand: 'toyota',
    model: 'corolla',
    year: '2024',

    start: function(){
        console.log('the car has started');
    }
};

console.log(car.brand);
console.log(car.year);
console.log(car.model);

car.start();


// -------PRACTICE:------

let oil = {
    olive: 'olive oil',
    butter: 'lard',
    crude: 'petroleum',

    cook: function(){
        console.log('the oil has been cooked');
    }
}
console.log(oil.olive);
console.log(oil.butter);
console.log(oil.crude);

oil.cook();


// -----END OF PRACTICE-----




//------ OBJECT WITH NESTED OBJECT ------



// let person = {
//     name: 'usman',
//     age: 24,
//     course: {
//         major: 'software engineering',
//         minor: 'javascript'
//     }
// };

// console.log(person.name);
// console.log(person.age);
// console.log(person.course.major);
// consule.log(person.course.minor);


// ------ PRACTICE:------

// let grease = {
//    foodGrade: ['bacon', 'butter', 'cheese'],
//    nonFood: ['car', 'water', 'nuclear waste'],
    
//    grease: function(){
//     console.log('types of grease!')
//    }
// }

// console.log(grease.foodGrade + grease.nonFood);
// console.log(grease.nonFood);
// grease.grease();


// ---- GOOD EXAMPLE ----
// let numset = {   // EMPTY
//     description : "Odd numbers",
//     contents : [
//         1,
//         3,
//         5,
//         7,
//         7,
//         9,
//         303,
//     ],
//     add : function(value) {
//         this.contents.push(value);
//     },
// }


// let numset = {
//     description : "Odd numbers",
//     contents : [
//         1,
//         3,
//         5,
//         7,
//         9,
//         303,
//     ],
//     add : function(value) {
//         for (num of this.contents) {
//             if (value == num) {return false;}
//         } //This is a SET so duplicate values are not allowed to be added
//         this.contents.push(parseInt(value));
//         return true; //Return true on successful add
//     },
// }

///------------------////

// let products = {
//     name: "jesse's skincare",
//     items: ["cleanser", "moisturizer", "toner"],
//     add: function(product) {
//         this.items.push(product);
//     }
// };

// console.log(products.name);       
// console.log(products.items);      

// products.add("cleanser");           
// console.log(products.items);


/// ---- Example WITH LOOP: USE!!! LEARN!!!-----

// let library = {
//     name: 'city library',
//     books: ['javascript basics', 'html & css', 'react',],
//     showbooks: function() {
//         console.log('books avaiable in ' + this.name + ':');
//         for (let i = 0; i < this.books.length; i++);
//             {
//             console.log('- ' + this.books [i]);
//         }
//     }
// }

// console.log(library.name);

// library.showbooks();


let money = {
    name: 'money forms',
    types: ['cash', 'silver', 'credit card', 'gold', 'bitcoin',],
    wealth: function(){
        console.log('different types of ' + this.name + '-');
        for (let i = 0; i < this.types.length; i++){
            console.log(':' + this.types[i]);
        }
    }
}
console.log(money.name);

money.wealth();