///////////////////////////////////////
// Lecture: Hoisting

/* совершенно неважно где были объявлены функция или переменные, 
все они передвигаются вверх своей области видимости, 
вне зависимости от того локальная она или же глобальная. 
Это называется механизм “поднятия” или в оригинальном названии hoisting */

/*** Функции ***/

// function declaration
// calculateAge(1965);
// function calculateAge(year) {
    // console.log(2016 - year);
// }

// function expression
/* механизм поднятия работает ТОЛЬКО с function declarations */
// retirement(1990);
// var retirement = function(year) {
    // console.log(65 - (2016-year));
// }

/*** Переменные ***/

/* механизм поднятия НЕ работает с age (годами) underfined */
// console.log(age);
// var age = 23;

// global execution context;
var one = 23;

function foo() {
    // undefined
    console.log(one);
    // local execution context;
    var one = 65;
    // выводит var 65;
    console.log(one);
}

foo();
// выводит var 23;
console.log(one);