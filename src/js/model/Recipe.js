/*** 
1. Cоздаем метод parseIngredients, для в обьекте Recipe для приведения названий ингридиентов к одному виду
   - создаем 2 массива 
     - const unitsLong = ['tablespoons', 'tablespoon', 'ounce', 'ounces', 'teaspoon', 'teasponos', 'cups', 'pounds']; // длинные названия
     - const unitsShort = ['tbsp', 'tbsp', 'oz', 'oz', 'tsp', 'tsp', 'cup', 'pound']; // короткие названия

   - С помочью цикла (map) перебираем ингридиенты
     
     - Приводим название игридиента к одному виду
       - переводим элемент в нижний регистр + присваеваем его let ingredient переменной (фунция toLowerCase);
       - перебираем массив unitsLong и заменяем ingredient (replace() функция) коротким названием из массива unitsShort
       
     - Удаляем скобки из названия игридиентов
     
    // ТЕСТ
     - Проверяем автозамену названий:
       - для того, чтобы не вводить запрос в поиск постоянно, используем 'load' событие
       - в контроллере рецепта для доступа рецепта из консоли добавляем его в window обьекту
       window.r = state.recipe;
    // !ТЕСТ
    
     - Разделяем ингридиенты на единицы измерения и ингридиенты
       - создаем массив из строки ингридиента
       - находим в данной строке индекс элемента, являющийся еденицей измерения
       - используем if/else для определения является ли элемент единицей измерения
         - если ингридиент присутствует в массиве
           - складываем номера с помочью функции eval()
         - если нет в массиве инг., но первый элемент номер
           - возращаем оbj
         - если нет в массиве инг
           - возращаем оbj
***/

import axios from 'axios';

export default class Recipe {
    constructor(id) {
        this.id = id;
    };  
    async getRecepiе() {
      try {
        const recipe = await axios(`https://forkify-api.herokuapp.com/api/get?rId=${this.id}`);
        this.title = recipe.data.recipe.title;
        this.author = recipe.data.recipe.publisher;
        this.url = recipe.data.recipe.source_url;
        this.img = recipe.data.recipe.image_url;
        this.ingredients = recipe.data.recipe.ingredients;
      } catch(error) {
        alert(`1ая ошибка recipe ${error}`);
      }
    };
    calcTime() {
        const numIng = this.ingredients.length;
        const periods = Math.ceil(numIng / 3);
       this.time = periods * 15;
    };
    calcServings() {
      this.servings = 4;  
    };
    parseIngredients() {
    // длинные названия
    const unitsLong = ['tablespoons', 'tablespoon', 'ounces', 'ounce', 'teaspoons', 'teaspoon', 'cups', 'pounds'];
    // короткие названия
    const unitsShort = ['tbsp', 'tbsp', 'oz', 'oz', 'tsp', 'tsp', 'cup', 'pound'];
    const units = [...unitsShort, 'g', 'kg'];
    
    const newIngredients = this.ingredients.map(el => {
        
        // 1. Приводим название игридиента к одному виду
        let ingredient = el.toLowerCase(); // нижний регистр
        unitsLong.forEach((unit, i) => { // замена по массиву
            ingredient = ingredient.replace(unit, unitsShort[i]);
        });
        
        // 2. Убираем скобки из названия игридиентов
        ingredient = ingredient.replace(/ *\([^)]*\) */g, ' ');
        
        // TESTING
        // return ingredient;
        
        // 3. Разделяем ингридиенты на единицы измерения и ингридиенты
        const arrIng = ingredient.split(' ');
        const unitIndex = arrIng.findIndex(el2 => units.includes(el2));
        
        let objIng;
        
        if(unitIndex > -1) {
            // Это еденица измерения
            // Ex. 4 1/2 cups, arrCount is [4, 1/2] --> eval("4+1/2") --> 4.5;
            // Ex. 4 cups, arrCount is [4];
            const arrCount = arrIng.slice(0, unitIndex);
            
            let count;
            if(arrCount.length === 1) {
                // если есть дифис (-), то делаем его (+),
                // для того, чтобы функция eval сработала корректно
                count = eval(arrIng[0].replace('-', '+'));
            } else { 
                count = eval(arrIng.slice(0, unitIndex).join('+'));
            }
            
            objIng = {
                count,
                unit: arrIng[unitIndex],
                ingredient: arrIng.slice(unitIndex + 1).join(' ')
            }
            
        } else if(parseInt(arrIng[0], 10)) { // если возможно конверниторовать в int, значит номер
            // Это НЕ еденица измерения, но первый элемент это номер
            objIng = {
                count: parseInt(arrIng[0], 10),
                unit: '',
                ingredient: arrIng.slice(1).join(' ')
            }
        } else if(unitIndex == -1) {
            // Это НЕ еденица измерения
            objIng = {
                count: 1,
                unit: '',
                ingredient // можно так, вместо ingredient:ingredient
            }
        }
        
         return objIng;
        
    }); 
       
    // измененный массив ингридиентов
    this.ingredients = newIngredients;
       
   };
};


