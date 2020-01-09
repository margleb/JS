// Global app controller

/***
1.Cоздаем архитектуру проекта MVC:
  - Модель src/models/Search.js
  - Контроллер index.js
  - Представление src/models/SearchViews.js
2.Импортируем данные в контроллер из модели/представления
  - из Search любую строку
  - из SearchViews константу, функции-константы (добавляем в начале export)
    - создаем функцию add c помочью "Стрелочной функции"
    - создаем функцию multiply c помочью "Стрелочной функции"
    - константу id
3.Используем для импорта в контроллер 'as' и фигурные скобки {}
4.Используем для импорта оператор * и получаем доступ через обьект
    - приравниваем к переменной через 'as'
***/

// из модели Search
import str from './model/Search';

// из представления SearchView
// import {add as a, multiply as m, ID} from './views/SearchView';

// c помочью *
import * as SearchView from './views/SearchView';


console.log(`3 + 5 = ${SearchView.add(3,5)}; 3 * 5 = ${SearchView.multiply(3,5)}; ID = ${SearchView.ID}`);
console.log(str);