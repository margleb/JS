/*  Мутации и принуждения переменных */

var firstName = 'John'; // string
var age = 28; // number

// конвертация номера в строку
console.log(firstName + ' ' + age);

// обьявление перменных
var job, isMarriad
// приравниваем переменные
job = 'teacher';
isMarried = 'false';
// bool конвертируется в строку
alert(firstName + ' is a ' + age + ' year old' + job + '. Is he married? ' + isMarried);

// Variable mutation
age = 'twenty eight';
job = 'driver';

var lastName = prompt('What is his last Name?');
console.log(firstName + ' ' + lastName);