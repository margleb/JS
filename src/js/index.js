// Global app controller

import Search from './model/Search';
import Recipe from './model/Recipe';
import List from './model/List';
import * as SearchView from './views/SearchView';
import * as RecipeView from './views/RecipeView';
import * as listView from './views/listView';
import {DOMElements, renderLoader, cleanLoader} from './views/base';

// обьект состояния
const state = {}
// TESTING
window.state = state;

// SEARCH CONTROLLER

async function getSearch() {
   // получить query из view
   var query = SearchView.getInput();
   // var query = 'pizza'; // TESTING
    
   if(query) {
       
    // новый Search oбьект в state
    state.search = new Search(query);
     
    // подготовоить UI для результата
    SearchView.clearInput();
    SearchView.clearResults();
    renderLoader(DOMElements.searchRes);
     
    try {
        // ищем результат
        await state.search.getRecepie();
        // показываем результат в UI
        cleanLoader();   
        SearchView.renderResults(state.search.result);        
    } catch(error) {
        alert(`2ая ошибка search ${error}`);
        cleanLoader();
    }
       
   }
}


DOMElements.searchBtn.addEventListener('click', (event) => {
   event.preventDefault();
   getSearch();
});

// TESTING
// window.addEventListener('load', (event) => {
//   event.preventDefault();
//   getSearch();
// });

DOMElements.resPages.addEventListener('click', (event) => {
   var btn = event.target.closest('.btn-inline');
   if(btn) {
    var pageNum = parseInt(btn.dataset.npb, 10);
    SearchView.clearResults();
    SearchView.renderResults(state.search.result, pageNum);
   }
});

// RECIPE CONTROLLER

const getRecepie = async () => {
    const ID = window.location.hash.replace('#', '');
    if(ID) {
        // Подготавливаем UI
        RecipeView.clearRecepie();
        renderLoader(DOMElements.recipe);
        RecipeView.highlightSelector(ID);
        // экземпляр класса recepie
        state.recepie = new Recipe(ID);
        
        // TESTING
        // window.r = state.recepie;
        
        try {
            // получаем по API рецепт и парсим ингридиенты
            await state.recepie.getRecepiе();
            state.recepie.parseIngredients();
            // расчитываем время + кол-во порций
            state.recepie.calcTime();
            state.recepie.calcServings();
            // рендерим recepie
            // console.log(state.recepie);
            cleanLoader();
            RecipeView.renderRecepie(state.recepie);
        } catch(error) {
            // alert(`2ая ошибка recipe ${error}`);
            console.log(error);
        }
        
    }
}

['hashchange', 'load'].forEach((event) => window.addEventListener(event, getRecepie));


/**
* LIST CONTROLLER
**/

/***
1. Добавляем Event событие при нажатии на кнопки, используем matches() функцию
   - .recipe_btn--add, .recipe_btn--add *'
   - вызваем метод conrolList();
2. Создаем controlList функцию
   - если в state нет обьекта list, то создаем новый экз. класса Liast
   - для каждого ingredients в массиве recipe
     - вызываем метод addItem с передачей аргументов // модель list
     - вызваем метод renderItem // listView
3. Создаем событие удаления и обновления списка
   - получаем уникальный id (itemid) из эл. shopping__item (метод closest)
   - если была нажата кнопка shopping__delete (метод matches), то:
     - удаляем из обьекта list элемент
     - удаляем из UI
   - если была кнопка кол-ва ингридиентов .shopping__count-value
     - получение значение из элемента и заносим в переменную 
     - вызываем функцию обновления updateCount()
***/


const controlList = () => {
  // Create a new list if there in none yet
  if (!state.list) state.list = new List();

  // Add each ingredient to the list and UI
  state.recepie.ingredients.forEach(el => {
     const item = state.list.addItem(el.count, el.unit, el.ingredient);
     listView.renderItem(item);
  });
    
}

// Нandle delete and update list item events
DOMElements.shopping.addEventListener('click', e => {
   const id = e.target.closest('.shopping__item').dataset.itemid;
   // Handle the delete button
   if (e.target.matches('.shopping__delete, .shopping__delete *')) {
       // Delete from state
       state.list.deleteItem(id);
       // Delete from UI
       listView.deleteItem(id);
       
   // Handle the count update
   } else if (e.target.matches('.shopping__count-value')) {
       // считываем значение
       const val = parseFloat(e.target.value, 10);
       // обновляем
       state.list.updateCount(id, val);
   }
});

// Handling recipe button clicks
DOMElements.recipe.addEventListener('click', e => {
   if(e.target.matches('.btn-decrease, .btn-decrease *')) {
       // Decrease button is clicked
       if (state.recepie.servings > 1) {
         state.recepie.updateServings('dec');
         RecipeView.updateServingsIngredients(state.recepie);
       }
   } else if (e.target.matches('.btn-increase, .btn-increase *')) {
       // Increase button is clicked
       state.recepie.updateServings('inc');
       RecipeView.updateServingsIngredients(state.recepie);
   } else if (e.target.matches('.recipe_btn--add, .recipe_btn--add *')) {
       controlList();
   }
   // console.log(state.recepie);
});

// TESTING
window.l = new List();