// Global app controller

/***
1. Cоздаем обьект состояния state
2. Создаем async контроллер поиска (НЕ ЗАБЫТЬ ДОБАВИТЬ ASYNC!)
   - если есть query запрос
     - получить query из view
     - новый Search oбьект в state
     - подготовоить UI для результата (НЕ ЗАБЫТЬ ДОБАВИТЬ AWAIT!)
     - ищем результат
     - показываем результат в UI
3. Cоздаем event при нажатии на search
   - предотварщаем дефолтное поведение релоада страницы preventDefault();
   - вызываем контроллер поиска
4. 
***/

import Search from './model/Search'


// обьект состояния
const state = {}

async function getSearch() {
   // получить query из view
   var query = 'pizza';
    
   if(query) {
       
    // новый Search oбьект в state
    state.search = new Search(query);
     
    // подготовоить UI для результата
     
    // ищем результат
    await state.search.getRecepie();
       
    // показываем результат в UI
    return console.log(state.search.result);
       
   }
}


document.querySelector('.search').addEventListener('click', (event) => {
   event.preventDefault();
   getSearch();
});

