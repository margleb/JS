// Lecture: Strings

let firstName = 'John';
let lastName = 'Smith';
const yearOfBirth = 1990;

function calcAge(year) {
    return 2016 - year;
}

// ES5
console.log('This is ' + firstName + ' ' + lastName + '. He was born in ' + yearOfBirth + '. Today, he is ' + calcAge(yearOfBirth) + ' years old');

// ES6
console.log(`This is ${firstName} ${lastName}. He was born in ${yearOfBirth}. Today he is ${calcAge(yearOfBirth)} years old.`);

// методы включенные в ES6
const n = `${firstName} ${lastName}`;
// проверка, начинается ли строка с J
console.log(n.startsWith('J'));
// проверка, заканчивается ли строка на th
console.log(n.endsWith('th'));
// проверка, есть ли в середине строки
console.log(n.includes(' '));
// количество повторений
console.log(`${firstName} `.repeat(5));