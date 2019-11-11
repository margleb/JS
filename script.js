///////////////////////////////////////
// Lecture: Scoping


// First scoping example

/* scope chane */
/* Функции имеют доступ до переменных, 
вложенных функция и до глобальных переменных */
//var a = 'Hello!';
//first();
//function first() {
//    var b = 'Hi!';
//    second();
//    function second() {
//        var c = 'Hey!';
//        console.log(a + b + c);
//    }
//}

/* execution stack */
var a = 'Hello!';
first();
function first() {
    var b = 'Hi!';
    second();
    function second() {
        var c = 'Hey!';
        third();
    }
}

function third() {
    var d = 'John';
    // функция не имеет доступа до переменной c возвращает underfined
    console.log(c);
    // имеет доступ до глобальной переменно a и локальной d
    console.log(a + d);
}