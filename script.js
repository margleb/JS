// Lecture: let and const

/*
// ES5
var name5 = 'Jane Smith';
var age5 = 23;
name5 = 'Jane Miller';
console.log(name5);

// ES6
const name6 = 'Jane Smith';
let age6 = 23;
name6 = 'Jane Miller';
// является константой и не может быть изменено
console.log(name6);
*/

// ES5
function driverLicence5(passedTest) {
    if(passedTest) {
        console.log(firstName); // underfined
        var firstName = 'John';
        var yearOfBirth = 1990;
    }
      console.log(firstName + 'born in ' + yearOfBirth + ' is now officially allowed to drive a car.');
}

driverLicence5(true)

// ES6
function driverLicence6(passedTest) {
    // console.log(firstName);
    let firstName;
    const yearOfBirth = 1990;
    if(passedTest) {
        let firstName = 'John';
        // const yearOfBirth = 1990;
    }
     // ошибка, так как let и const имеют блочную область видимости
     console.log(firstName + 'born in ' + yearOfBirth + ' is now officially allowed to drive a car.');
}

driverLicence6(true)


let i = 23;
// благодаря блочной области видимости, переменная i является
// отличной переменной от i наверху
for (let i = 0; i < 5; i++) {
    console.log(i);
}
console.log(i);
