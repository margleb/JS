// Lecture Arrow function 2

// ES5
var box5 = {
    color: 'green',
    position: 1,
    clickMe: function() {
        var self = this; // костыль для избегания проблемы c window обьектом
        document.querySelector('.green').addEventListener('click', function() {
           var str = 'This is box number ' + self.position + ' and it is ' + self.color;
           alert(str);
        });
    }
}

// this указывает на window обьект, поэтому возвращает underfined
// box5.clickMe();


// ES6
const box6 = {
    color: 'green',
    position: 1,
    clickMe: function() {
        // arrow function shares the lexical this keyword
        document.querySelector('.green').addEventListener('click', () => {
           var str = 'This is box number ' + this.position + ' and it is ' + this.color;
           alert(str);
        });
    }
}

box6.clickMe();

/*
const box66 = {
    color: 'green',
    position: 1,
    clickMe: () => { // теперь мы делимся глобальным this, который указывает на обьект window
        document.querySelector('.green').addEventListener('click', () => {
           var str = 'This is box number ' + this.position + ' and it is ' + this.color;
           alert(str);
        });
    }
}
*/

// здесь будет опять underfined, так как у window обьекта нет position и color
// box6.clickMe();

function Person(name) {
    this.name = name;
}

// ES5
Person.prototype.myFriends5 = function(friends) {
    var arr = friends.map(function(el) {
       // имя не передается, так как в данном случае this указывает на обьект window
       return this.name + ' is friends with ' + el; 
    }.bind(this)); // с помочью функции bind 'связывание', передаем this в анонимную функцию
    console.log(arr);
}

var friends = ['Bob', 'Jane', 'Mark'];
new Person('John').myFriends5(friends);


// ES6
Person.prototype.myFriends6 = function(friends) {
    var arr = friends.map(el => 
    // имя не передается, так как в данном случае this указывает на обьект window
    `${this.name} is friends with ${el}`); 
    console.log(arr);
}

new Person('Mike').myFriends6(friends);