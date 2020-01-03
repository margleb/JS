/////////
// Lecture: Classes and subclasses

// ES5
var Person5 = function(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

Person5.prototype.calculateAge = function() {
    var age = new Date().getFullYear() - this.yearOfBirth;
    console.log(age);
}

/****/

var Athlete5 = function(name, yearOfBirth, job, olympicGames, medals) {
    // перекидываем св-ва из Person5 в Athlete5
    Person5.call(this, name, yearOfBirth, job);
    this.olympicGames = olympicGames;
    this.medals = medals;
};

// перекидываем calculateAge в прототип Athlete5
Athlete5.prototype = Object.create(Person5.prototype);
// создаем в прототипе метод wonMedal
Athlete5.prototype.wonMedal = function() {
    this.medals++;
    console.log(this.medals);
}

/****/

var johnAthlete5 = new Athlete5('John', 1990, 'swimmer', 3, 10);

johnAthlete5.calculateAge();
johnAthlete5.wonMedal();

// ES6
class Person6 {
    constructor (name, yearOfBirth, job) {
        this.name = name;
        this.yearOfBirth = yearOfBirth;
        this.job = job;
    }
    
    calculateAge() {
       var age = new Date().getFullYear() - this.yearOfBirth;
       console.log(age);
    }
}

/****/

class Athlete6 extends Person6 {
    constructor(name, yearOfBirth, job, olympicGames, medals) {
        // перекидываем св-ва из Person6 в Athlete6
        super(name, yearOfBirth, job);
        this.olympicGames = olympicGames;
        this.medals = medals;
    }
    wonMedal() {
        this.medals++;
        console.log(this.medals);
    }
}

/****/

const johnAthlete6 = new Athlete6('John', 1990, 'Swimmer', 3, 10);

johnAthlete6.wonMedal();
johnAthlete6.calculateAge();