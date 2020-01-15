/***
1. Создаем RecipeView
     - функция createIngredient
       - возращаем html код ингридиента
     - экспортируемая функция renderRecepie
       - markup html (шаблон рецепта)
       - проходим циклом (map) список ингридиентов (исп. join для соединения)
       - выводим в шаблон данные + insert "afterbegin"
     - функция очищения clearRecepie();
     - создаем массив units, включающий в себя unitsShort(деструктором...) + 'kg', 'g')
2. Добавляем в контроллер Search + renderLoader/clearLoader
***/


import {DOMElements} from './base';


export const clearRecepie = () => {
   DOMElements.recipe.innerHTML = ''; 
}


const createIngredient = (recepie) => `      
<li class="recipe__item">
   <svg class="recipe__icon">
      <use href="img/icons.svg#icon-check"></use>
   </svg>
   <div class="recipe__count">${recepie.count}</div>
   <div class="recipe__ingredient">
      <span class="recipe__unit">${recepie.unit}</span>
      ${recepie.ingredient}
   </div>
</li>
`


export const renderRecepie = (recepie) => {
let markup = `
<figure class="recipe__fig">
   <img src="${recepie.img}" alt="${recepie.title}" class="recipe__img">
   <h1 class="recipe__title">
      <span>${recepie.title}</span>
   </h1>
</figure>
<div class="recipe__details">
   <div class="recipe__info">
      <svg class="recipe__info-icon">
         <use href="img/icons.svg#icon-stopwatch"></use>
      </svg>
      <span class="recipe__info-data recipe__info-data--minutes">${recepie.time}</span>
      <span class="recipe__info-text"> minutes</span>
   </div>
   <div class="recipe__info">
      <svg class="recipe__info-icon">
         <use href="img/icons.svg#icon-man"></use>
      </svg>
      <span class="recipe__info-data recipe__info-data--people">${recepie.servings}</span>
      <span class="recipe__info-text"> servings</span>
      <div class="recipe__info-buttons">
         <button class="btn-tiny">
            <svg>
               <use href="img/icons.svg#icon-circle-with-minus"></use>
            </svg>
         </button>
         <button class="btn-tiny">
            <svg>
               <use href="img/icons.svg#icon-circle-with-plus"></use>
            </svg>
         </button>
      </div>
   </div>
   <button class="recipe__love">
      <svg class="header__likes">
         <use href="img/icons.svg#icon-heart-outlined"></use>
      </svg>
   </button>
</div>
<div class="recipe__ingredients">
   <ul class="recipe__ingredient-list">
      ${recepie.ingredients.map(ing => createIngredient(ing)).join('')}
   </ul>
   <button class="btn-small recipe__btn">
      <svg class="search__icon">
         <use href="img/icons.svg#icon-shopping-cart"></use>
      </svg>
      <span>Add to shopping list</span>
   </button>
</div>
<div class="recipe__directions">
   <h2 class="heading-2">How to cook it</h2>
   <p class="recipe__directions-text">
      This recipe was carefully designed and tested by
      <span class="recipe__by">The Pioneer Woman</span>. Please check out directions at their website.
   </p>
   <a class="btn-small recipe__btn" href="http://thepioneerwoman.com/cooking/pasta-with-tomato-cream-sauce/" target="_blank">
      <span>Directions</span>
      <svg class="search__icon">
         <use href="img/icons.svg#icon-triangle-right"></use>
      </svg>
   </a>
</div>`;
    
DOMElements.recipe.insertAdjacentHTML('beforeend', markup);
}