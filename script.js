//////////////////////////
// Lecture: Functions returning functions

function interviewQuestion(job) {
    if(job === 'designer') {
        return function(name) {
            console.log(name + ', can you pls explain what UX design is?');
        }
    } else if (job === 'teacher') {
        return function(name) {
            console.log('What subject do you teach, ' + name + '?');
        }
    } else {
        return function(name) {
            console.log('Hello ' + name + ', what do you do?');
        }
    }
}

// сохраняем функцию в соответствии с работой
var teacherQuestion = interviewQuestion('teacher');
var designerQuestion = interviewQuestion('designer');
// возращаем текст вопроса
teacherQuestion('John');
designerQuestion('John');
designerQuestion('Jane');
designerQuestion('Mark');

// вызывается функция фнути функции
interviewQuestion('teacher')('Mark');


