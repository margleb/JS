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