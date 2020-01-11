/***
1. Вносим изменения в функцию renderResults
   - передаем аргументы:
       - page (страница) по дефолту 1,
       - resPerPage (количество результатов на страницу) по дефолту 10
   - создаем переменные (количество на страницу)
       - const start // начальный элемент на странице
       - const end // последний элемент на странице
   - с помочью метода slice() выделяем в recepies первый/последний элемент
   - вычесляем начальный и конечный элемент на странице
     - начальный элемент вычисляем как текущая страница умноженная на кол-во результатов на страницу
       - вычитаем из текущей страницы -1
     - конечный элемент как производение текущей страницы на кол-во результатов на страницу
   - вызываем функцию генерации кнопок на страницу
2. Отображение кнопок пагинации в интерфейсе
   - создаем приватную функцию renderButtons
     - передаем аргументы
       - page (текущая страница)
       - numResults (количесвто результатов)
       - resPerPage (количество результатов на каждую страницу)
     - высчитваем количество страниц Math.ceil(numResults / resPerPage)
     - создаем if/else отображения кнопок в интерфейсе
       - если кол-во страниц равно 1, то кнопки не отображаются
       - кнопка prev должна появлятся только если кол-во страниц больше 1
       - вызываем внутри функцию createButton() и приравниваем к переменной button
         - для обоих кнопок создаем строку в button c prev и next
     - вставляем кнопки в html 'afterbegin'
   - создаем приватную функцию creatButton
     - передаем аргументы
       - page (номер страницы)
       - type (тип кнопки "вперед" или "назад")
     - передаем html код кнопки
       - тернарным оператором передаем номер страницы (в зависимости от ее типа)
       - тернарным оператором меняем класс иконки left/right
       - передаем type кнопки в class
       - cоздаем data атрибут с указание номера страницы, куда мы хотим переместиться
3. Добавляем обработчик собития при нажатии на кнопку в контроллер
   - используем target и функцию closest('.btn-inline')
   - если есть элемент btn, то получаем из data атрибут номер страницы (btn.dataset.goto);
     - используем parseint для конвертации в строки в число, передаем аргумент 10 (с 0 по 10 страницу)
   - вызываем функцию очищения результата
   - вызываем функцию рендеренга результата страниц
4. В clearResults добавляем очищение кнопок из DOM
***/

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
export const clearResults = () => {
    DOMElements.resultsList.innerHTML = '',
    DOMElements.resPages.innerHTML = ''
};


const createButton = (page, type) => `
<button class="btn-inline results__btn--${type}" data-npb="${ type === 'prev' ? page - 1 : page + 1 }">
   <span>Page ${ type === 'prev' ? page - 1 : page + 1 }</span>
   <svg class="search__icon">
      <use href="img/icons.svg#icon-triangle-${ type === 'prev' ? 'left' : 'right' }"></use>
   </svg>
</button>
`

// генератор кнопок пагинации
const renderButtons = (page, numResults, recPerPage) => {
    
    const pages = Math.ceil(numResults / recPerPage);
    let button;
    
    // отображение кнопок
    if(page == 1 && pages > 1) {
        // следующая кнопка
        button = createButton(page, 'next');
    } else if( page < pages) {
        // следущая + предыдущая кнопка
        button = `${createButton(page, 'prev')}${createButton(page, 'next')}`;
    } else if( page == pages && pages > 1) {
        // предыдущая кнопка
        button = createButton(page, 'prev'); 
    }
    
    DOMElements.resPages.insertAdjacentHTML('beforeend', button);
}

// перебираем каждый рецепт полученный по API
export const renderResults = (recepies, page = 1, recPerPage = 10) => {
    const start = (page - 1) * recPerPage;
    const end = page * recPerPage;
    recepies.slice(start, end).forEach(renderRecepie);
    // гененерируем кнопку
    renderButtons(page, recepies.length, recPerPage);
};