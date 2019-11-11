/////////////////////////////////
// Lecture: the this keyword

// возворащает window object
// console.log(this);

/*
calculateAge(1985);

function calculateAge(year) {
    console.log(2016 - year);
    // ключевое слово this изначально всегда указывает на window обьект
    console.log(this);
}
*/

var john = {
    name: 'John',
    yearOfBirth: 1990,
    calculateAge: function() {
        /** в данном случае, this указывает на john обьект **/
        console.log(this);
        /** укзаывает на год рождения **/
        console.log(2016 - this.yearOfBirth);
        // function innerFunction() {
            /** внутри регулярных функций this всегда указывает на обьект window **/
            // console.log(this);
        // }
        // innerFunction();
    }
}

john.calculateAge();

// обьект mike
var mike = {
    name: 'Mike',
    yearOfBirth: 1984
};

// копируем функцию calculateAge() из 
// классам john в класс mike;
mike.calculateAge = john.calculateAge;
mike.calculateAge();