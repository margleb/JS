/* Object.create */

// обьект
var personProto = {
    calculateAge: function() {
        console.log(2016 - this.yearOfBirth);
    }
};

// Создание обьекта john
var john = Object.create(personProto);
// Добавление свойств
john.name = 'John';
john.yearOfBirth = 1990;
john.job = 'teacher';

// cоздание обьекта janе со свойствами
var jane = Object.create(personProto, {
   name: { value: 'Jane' },
   yearOfBirth: { value: 1969 },
   job: { value: 'designer' }
});