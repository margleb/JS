/* primitives vs objects */

/* Примитивы */
// var a = 23;
// var b = a;
// a = 46;
// сonsole.log(a); // 46
// console.log(b); // 23


/* Обьекты */
// var obj1 = {
    // name: 'John',
    // age: 26
// };

// cоздается ссылка на обьект
// var obj2 = obj1;
// obj1.age = 30;
// console.log(obj1.age); // 30
// console.log(obj2.age); // 30


// Функции
var age = 27;
var obj = {
    name: 'Jonas',
    city: 'Lisbon',
};

/* в качестве b
передается не обьект 
а ссылка на него */
function change(a, b) {
    a = 30;
    b.city = 'Gleb';
}

change(age, obj);

// age остался неизменным
console.log(age);
// Lisbon изменился на San Francisco
console.log(obj.city);