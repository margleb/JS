/**********************
* Objects and properties
*/

// john object
var john = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1990,
    family: ['Jane', 'Mark', 'Bob', 'Emily'],
    job: 'teacher',
    isMarried: false
};
// Доступ до элемента обьекта
console.log(john.firstName);
console.log(john['lastName']);
var x = 'birthYear';
// console.log(john[x]);

// mutate
john.job = 'designer';
john['isMarried'] = true;
console.log(john);

// создание нового пустого обьекта
var jane = new Object();
jane.firstName = 'Jane';
jane.birthYear = 1969;
jane['lastName'] = 'Smith';
console.log(jane);