// Global app controller

/***
1. Cоздаем файл base.js в папке Views
   - экпортируем обьект элементов DOM
2. Cоздаем функцию getInput() в SearchView.js, 
   - получает значение (value) из поля поиска (ES6)
3. Создаем функцию renderRecepie в SearchView.js,
   - принимает конкретный рецепт (html разметку) и заносит его данные в html
4. Создаем функцию renderResults() в SearchView.js,
   - перебирает каждый рецепт по API
5. Создаемочищающие функции в SearchView.js
   - сlearInput() из getInput()  и clearResults() из DOM (innerHTML)
***/

import Search from './model/Search';
import * as SearchView from './views/SearchView';
import {DOMElements} from './views/base';

// обьект состояния
const state = {}

async function getSearch() {
   // получить query из view
   var query = SearchView.getInput();
    
   if(query) {
       
    // новый Search oбьект в state
    state.search = new Search(query);
     
    // подготовоить UI для результата
    SearchView.clearInput();
    SearchView.clearResults();
     
    // ищем результат
    await state.search.getRecepie();
       
    // показываем результат в UI
    // return console.log(state.search.result);
    SearchView.renderResults(state.search.result);
       
   }
}


DOMElements.searchBtn.addEventListener('click', (event) => {
   event.preventDefault();
   getSearch();
});

