/***
- устанавливаем библиотеку fraction.js npm i fractional --save
  - https://github.com/infusion/Fraction.js
- создаем функцию formatCount
  - если мы имеем count
    - c помочью деструктора [inc, dec] опр. 2 переменных
      - конвертируем count в строку (toString()) и разделяем (split()) точкой
      - используем map и parseInt для конвертации в номер
    - если нет десятичных(dec), возращаешьм count
    - если целое число (int) равно 0
      - исп.библиотку fraction (new Fraction(count))
      - return `${fr.numerator}/${fr.denominator}` // 1/2 = 0.5
    - иначе 
      - исп.библиотку fraction (new Fraction(count - int))
      - return `${int} ${fr.numerator}/${fr.denominator}`
  - возращем '?'

- создаем функцию highlightSelector (подсветка выд. рецепта)
  - с помочью Array.from выбираем все results__link
    - c помочью forEach удаляем класс classList.remove(results_link--active)
  - document.querySelector(`a[href*="#${id}"]`).classList.add('results_link--active')
  
- в контроллере добавляем в UI вызов функции
  if(state.search) searchView.highlightSelector(id);

***/


import { Fraction } from 'fractional';
import {DOMElements} from './base';


export const highlightSelector = (id) => {
    
  const resultsArr = Array.from(document.querySelectorAll(".results__link"));
 
  resultsArr.forEach(res => {
    res.classList.remove("results__link--active");
  });
 
  const item = document.querySelector(`.results__link[href*="${id}"]`);
 
  if (item) {
    item.classList.add("results__link--active");
  }
}


const formatCount = (count) => {
    if(count) {
        
        const [int, dec] = count.toString().split('.').map(el => parseInt(el, 10));
        if(!dec) return count;
        if (int === 0) {
            const fr = new Fraction(count);
            return `${fr.numerator}/${fr.denominator}`
        } else {
            let fr = new Fraction(count - int);
            return `${int} ${fr.numerator}/${fr.denominator}`;
        }
        return '?';
    }
}

export const clearRecepie = () => {
   DOMElements.recipe.innerHTML = ''; 
}


const createIngredient = (recepie) => `      
<li class="recipe__item">
   <svg class="recipe__icon">
      <use href="img/icons.svg#icon-check"></use>
   </svg>
   <div class="recipe__count">${formatCount(recepie.count)}</div>
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