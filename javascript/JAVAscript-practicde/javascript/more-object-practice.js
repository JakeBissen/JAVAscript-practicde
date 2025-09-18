// -------SIMPLE OBJECT WITH PROPERTIES-------

let student = {
    name: 'jake',
    age: '20',
    course: 'software engineering', 
};

console.log('Name: ' + student.name);
console.log('age: ' + student.age);
consule.log('course: ' + student.course);

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

