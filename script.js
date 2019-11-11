/******************
* Arrays
*/

// Initialize new array
var names = ['John', 'Mark', 'Jane'];
var years = new Array(1990, 1969, 1948);

console.log(names[0]);
console.log(names.length);

// Mutate array date
names[1] = 'Ben'
// последний элемент в массиве
names[names.length] = 'Mary';
console.log(names);


// Different data types
var john = ['John', 'Smith', 1990, 'teacher', false];
// добавляет элемент в конец массива
john.push('blue');
// добавляет элемент в начало массива
john.unshift('Mr.');
console.log(john);

// удаляет элемент из начала массива
john.pop();
// удаляет элемент из конца массива
john.shift()
console.log(john);
// возращает позицию элемента в массиве
// если элемента нет в массиве, то верент -1
console.log(john.indexOf(1990));

var isDesigner = john.indexOf('designer') === -1 ? 'John is NOT a designer' : 'John IS a designer';
console.log(isDesigner);