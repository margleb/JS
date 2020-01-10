/***
 1. Добавляем .results в DOMStrings
 2. Cоздаем экспортируемую функцию renderLoader (аргумент results)
    - html код loader 
      `<div class="${elements.loader}">
           <svg>
            <use href="img/icons.svg#icon-cw"></use>
           </svg>
       </div>`
    - выводим в html 'afterbegin' loager
3. Cоздаем очищающую экспортируемую функцию cleanLoader
   - выбираем элемент .loader на странице
   - удаляем его со страницы removeChild();
***/

export const DOMElements = {
    inputField: document.querySelector('.search__field'),
    searchBtn: document.querySelector('.search'),
    resultsList: document.querySelector('.results__list'),
    searchRes: document.querySelector('.results')
}

export const ElementString = {
    loader: 'loader'
}

export const renderLoader = (parent) => {
const loader =  
`
<div class="${ElementString.loader}">
   <svg>
      <use href="img/icons.svg#icon-cw"></use>
   </svg>
</div>
`
parent.insertAdjacentHTML('afterbegin', loader);
}


export const cleanLoader = () => { 
    var loader = document.querySelector(`.${ElementString.loader}`);
    if (loader) loader.parentElement.removeChild(loader);
}