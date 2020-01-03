/////////
// Lecture: Maps

/*****
Основные приемущества Maps в том, что:
1. Можно использовать все что угодна в качестве ключа
2. Maps можно перебирать итерациями, что позволяет легко манипулировать данными
3. Позволяет легко получить количество элементов с помочью св-ва size
4. Можно легко добавлять и удалять элементы из Map
*****/

const question = new Map();
question.set('question', 'What is the offical name of the latest major JavaScript version?');
question.set(1, 'ES5');
question.set(2, 'ES6');
question.set(3, 'ES2015');
question.set(4, 'ES7');
question.set('correct', 3);
question.set(true, 'Correct answer');
question.set(false, 'Wrong, please try again!');

// console.log(question.get('question'));
// количество данных в Map
// console.log(question.size);
// если есть элемент 4
if(question.has(4)) {
    // то удалить его
    question.delete(4);
    // console.log('Answer 4 is here!');
}
// удалить все элементы
// question.clear();

// map позволяет перебирать циклом
// question.forEach((value, key) => console.log(`This is ${key}, and it\'s set to ${value}`));


// entries позволяет сохранять введенное значение
for (let [key, value] of question.entries()) {
   // console.log(`This is ${key}, and it\'s set to ${value}`);
   if(typeof(key) === 'number') {
       console.log(`Answer ${key}: ${value}`);
   }
}

const ans = parseInt(prompt('Write the correct answer'));
console.log(question.get(ans === question.get('correct')));