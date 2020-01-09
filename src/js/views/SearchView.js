import {DOMElements} from './base'


// получаем значение из поля
export const getInput = () => DOMElements.inputField.value;

// очищаем значение из getInput()
export const clearInput = () => DOMElements.inputField.value = '';

// заносим конкретный рецепт в html
const renderRecepie = recepie => {
const DOMelement =
`<li>
   <a class="results__link" href="#${recepie.recipe_id}">
      <figure class="results__fig">
         <img src="${recepie.image_url}" alt="${recepie.title}">
      </figure>
      <div class="results__data">
         <h4 class="results__name">${recepie.title}</h4>
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