/*** 
1. Создаем метод updataServings()
   - cеврировка (порция)
       - тернарным оператором в зависимости от переданного типа увеличиваем/уменьшаем this.servings и приравниваем к const newServings
       - обновляем this.servings = newServings
   - перебираем каждый ингридиент и умножаем его на % увеличения
2. Создаем событие клика на кнопки (-, +) в контроллере
   - используем if/else и matches функццию
   - указываем что inc не может быть меньше 1
3. Создаем в SerchView.js фунцию updateServingsIngredients() для обн. порций + инг
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
   updateServings(type) {
        // Servings
        const newServings = type == 'dec' ? this.servings - 1 : this.servings + 1;
        // Ingredients
        this.ingredients.forEach(ing => {
            ing.count *= (newServings / this.servings);
        })
        this.servings = newServings
    };
};


