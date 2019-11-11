/* Function constructor 
 * Для проверки того, что обьект является прототипом функции-конструктора,
 * в консоле пишем john.__proto__ == Person.prototype
 *
 * Для проверки, является ли класс экзепляром функции-конструктора, в консоле пишем
 * john instanceof Person
 * 
 * В JS почти все является обьектом, для того чтобы в этом убедиться используем конструкцию 
 * console.info()
 */

// Обьект
// var john = {
//    name: 'John',
//    yearOfBirth: 1990,
//    job: 'teacher'
// }

// Функция-конструктор
// Начинается с большой буквы
var Person = function(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
//    this.calculateAge = function() {
//        console.log(2016 - this.yearOfBirth);
//    }
}

// добавление метода к прототипу,
// через св-во prototype
Person.prototype.calculateAge = function() {
    console.log(2016 - this.yearOfBirth);
};

// добавление св-ва к прототипу
// через св-во prototype
Person.prototype.lastName = 'Smith';

// экземпляры классов
var john = new Person('John', 1990, 'tacher');
var jane = new Person('Jane', 1969, 'designer');
var mark = new Person('Mark', 1948, 'retired');

// методы
john.calculateAge();
jane.calculateAge();
mark.calculateAge();

// вызов lastName
console.log(john.lastName);
console.log(jane.lastName);
console.log(mark.lastName);