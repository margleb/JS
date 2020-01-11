/***
    1. Cоздаем cлушателей событий (массивом):
       - отслеживание состояния изменения хеша (hashchange)
       - отслеживание состояния перезагрузки браузера (loader)
    2. Создаем функцию getRecepie();
       - получаем ID хеша (window.location.hash) и удаляем # вначале (функция replace());
       - если есть ID, то
         - создаем новый обьект recepiе в обьекте состояния state
         - получаем данные о рецепте (НЕ ЗАБЫТЬ AWAIT);
         - calcTime/calcService
    3. Cоздать try/catch для getSearch / getRecepie
***/

// Global app controller

import Search from './model/Search';
import Recipe from './model/Recipe';
import * as SearchView from './views/SearchView';
import {DOMElements, renderLoader, cleanLoader} from './views/base';

// обьект состояния
const state = {}

// SEARCH CONTROLLER

async function getSearch() {
   // получить query из view
   var query = SearchView.getInput();
    
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
        // экземпляр класса recepie
        state.recepie = new Recipe(ID);
        
        try {
            // получаем по API рецепт
            await state.recepie.getRecepiе();
            // расчитываем время + кол-во порций
            state.recepie.calcTime();
            state.recepie.calcServings();
            // рендерим recepie
            console.log(state.recepie);
        } catch(error) {
            alert(`2ая ошибка recipe ${error}`);
        }
        
    }
}

// ['hashchange'].forEeach((event) => window.addEventListener(event, getRecepie));
window.addEventListener('hashchange', getRecepie);