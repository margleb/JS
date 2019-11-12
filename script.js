//////////////////////////
// Lecture: Bind, call and apply

/** 
* call()/apply() функции используются для немедленного вызова функции.
* bind() может вызываться в случаях, когда функция должна быть вызывана позже, в определенных случаях когда это полезно
**/


// обьект
var john = {
    name: 'John',
    age: 26,
    job: 'teacher',
    presentation: function(style, timeOfDay) {
        if (style === 'formal') {
           console.log('Good ' + timeOfDay + ', Ladies and gentlemen! I\'m ' + this.name + ', I\'m a ' + this.job + ', and I\'m ' + this.age + ' years old.');
        } else if (style === 'friendly') {
           console.log('Hey! What\'s up? I\'m ' + this.name + ', I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old. Have a nice ' + timeOfDay + '.');
        }
    }
}

// обьект
var emily = {
    name: 'Emily',
    age: 35,
    job: 'designer'
}

// вызов метода
// john.presentation('formal', 'morning');


/** 
* первый параемтр call() устанавливает значение this, котрое является обьектом, для которого вызывается функция
* остальные параметры являются параметрами функции по умолчанию
**/
john.presentation.call(emily, 'friendly', 'afternoon');

/** 
* первый параемтр apply() устанавливает значение this, котрое является обьектом, для которого вызывается функция
* в качестве второго аргумента принимается массив аргументов функции
**/
john.presentation.apply(emily, ['friendly', 'afternoon'])

/** 
* первый параемтр bind() устанавливает значение this, котрое является обьектом, для дальнейшего его вызова
* остальные параметры указываются как параметры для вызова основной функции
**/
var johnFriendly = john.presentation.bind(john, 'friendly');
// вызов функций
johnFriendly('morning');
johnFriendly('night');

var emilyFormal = john.presentation.bind(emily, 'formal');
// вызов функций
emilyFormal('afternoon');

/**********************************************/

// массив годов
var years = [1990, 1965, 1937, 2005, 1998];

// колбак функция
function arrayCalc(arr, fn) {
    var arrRes = []; 
    for (var i = 0; i < arr.length; i++) {
        // push - вставляет элементы в конец массива
        // колбек функция
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}

function calculateAge(el) {
    return 2016 - el;
}

function isFullAge(limit, el) {
    return el >= limit;
}

var ages = arrayCalc(years, calculateAge); // массив с возрастами
var fullJapan = arrayCalc(ages, isFullAge.bind(this, 20));
console.log(ages);
console.log(fullJapan);