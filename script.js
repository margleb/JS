//////////////////////////
// Lecture: Closures

function retirement(retirementAge) {
    var a = ' years left until retirement.';
    return function(yearOfBirth) {
        var age = 2016 - yearOfBirth;
        console.log((retirementAge - age) + a);
    }
}

// первая функция
var retirmentUS = retirement(66);
var retirmentGermany = retirement(65);
var retirmentIceland = retirement(67);
// вторая анонимная функция
retirmentGermany(1990);
retirmentUS(1990);
retirmentIceland(1990);

// переменная a остается в памяти, 
// даже после возвращения внутренней функции
// retirement(66)(1990);

// параметр job можно будет использовать,
// даже псле того, как анониманя функция
// будет возвращена
function interviewQuestion(job) {
    return function(name) {
          if(job === 'designer') {
            console.log(name + ', can you pls explain what UX desig');  
          } else if (job === 'teacher') {
            console.log('What subject do you teach, ' + name + '?');  
          } else {
            console.log('Hello ' + name + ', what do you do?');  
          }
        }
    }
    
// параметр job остается даже после возвращения
// анонимной функции
interviewQuestion('teacher')('John');