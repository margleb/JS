// Global app controller

import Search from './model/Search';
import Recipe from './model/Recipe';
import * as SearchView from './views/SearchView';
import * as RecipeView from './views/RecipeView';
import {DOMElements, renderLoader, cleanLoader} from './views/base';

// обьект состояния
const state = {}

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
// window.addEventListener('hashchange', getRecepie);