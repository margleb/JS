/****
1. Cоздаем функцию лимитированного тайтла рецепта
   - передаем аргументами title; limit=17
   - условие, если заголовок больше чем limit
   - функцией split() разбиваем строку и проходися функцией reduce()
     - если текущая длина мньше лиминитрованой, то заносим слово в новый массив
     - возращаем acc + cur.length
   - функцией join() соединяем массив и возвращаем его как строку
****/

import {DOMElements} from './base'


// получаем значение из поля
export const getInput = () => DOMElements.inputField.value;

// очищаем значение из getInput()
export const clearInput = () => DOMElements.inputField.value = '';

// функция лимитированного тайтла рецепта
const titlelimit = (title, limit = 17) => {
    var newArr = [];
    if(title.length > limit) {
        
        title.split(' ').reduce((acc, cur) => {
            
            if(acc + cur.length <= limit) {
               newArr.push(cur);
            }
            
            // аккумулирует
            return acc + cur.length;
        }, 0);
        
        // возращает урезанную стрку
        return `${newArr.join(' ')} ...`
    }
    
    // по дефолту возращает title
    return title;
}

// заносим конкретный рецепт в html
const renderRecepie = recepie => {
const DOMelement =
`<li>
   <a class="results__link" href="#${recepie.recipe_id}">
      <figure class="results__fig">
         <img src="${recepie.image_url}" alt="${recepie.title}">
      </figure>
      <div class="results__data">
         <h4 class="results__name">${titlelimit(recepie.title)}</h4>
         <p class="results__author">>${recepie.publisher}</p>
      </div>
   </a>
</li>`;

DOMElements.resultsList.insertAdjacentHTML('beforeend', DOMelement);    
};

// очищаем cписок рецептов
export const clearResults = () => DOMElements.resultsList.innerHTML = '';

// перебираем каждый рецепт полученный по API
export const renderResults = (recepies) => recepies.forEach(renderRecepie); // здесь можно просто передать имя функции