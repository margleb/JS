/////////
// Lecture: Spread operator

function addFourAges(a, b, c, d) {
    return a + b + c + d;
}

var sum1 = addFourAges(18, 30, 12, 21);
console.log(sum1);

// ES5
var ages = [18, 30, 12, 21];
// apply функция подставляет массив как аргументы в функцию
var sum2 = addFourAges.apply(null, ages);
console.log(sum2);

// ES6
// spread operator
const sum3 = addFourAges(...ages);
console.log(sum3);


const falulySmith = ['John', 'Jane', 'Mark'];
const familyMiller = ['Mary', 'Bob', 'Ann'];
const bigFamily = [...falulySmith, 'Lily', ...familyMiller];
console.log(bigFamily);


const h = document.querySelector('h1');
const boxes = document.querySelectorAll('.box');
const all = [h, ...boxes];;
Array.from(all).forEach(cur => cur.style.color = 'purple');
