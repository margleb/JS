/**********************
* Objects and methods
*/

// john object
var john = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1992,
    family: ['Jane', 'Mark', 'Bob', 'Emily'],
    job: 'teacher',
    isMarried: false,
    // метод
    calcAge: function() {
        // доступ до св-ва данного обьекта через this
        // установка нового св-ва age
        this.age =  2018 - this.birthYear;
    }
};

// доступ до метода
// console.log(john.calcAge(1990));

// инициализируем метод calcAge(); 
john.calcAge();
console.log(john);