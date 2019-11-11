//////////////////////////
// Lecture: Passing functions as arguments

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


function isFullAge(el) {
    return el >= 18;
}

// частота сердцебиения
function maxHeartRate(el) {
    if(el >= 18 && el <= 81) {
     return Math.round(206.9 - (0.67 * el));   
    } else {
        return -1;
    }
}

/* мы не вставляем () для 
calculateAge, потому
что хотим вызывть функцию
внутири arrayCalc "колбек функция" */
var ages = arrayCalc(years, calculateAge);
var fullAges = arrayCalc(ages, isFullAge);
var retes = arrayCalc(ages, maxHeartRate);

console.log(ages);
console.log(fullAges);
console.log(retes);

