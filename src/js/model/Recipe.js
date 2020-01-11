/***
// API 47746
http://forkify-api.herokuapp.com/

1. Импортируем библиотеку axios
2. Cоздаем класс Recipe
   - в конструктор передаем id
   - Cоздаем метод getRecepiе
     - получаем данные конкретного рецепта по ID
     - заносим в обьект осн. данные по рецепту
   - Создаем метод calcTime (высчитываем время приготовления блюда)
   - Создаем метод calcServings (кол-во порций) 
3. Импортируем Search модель в index.js как Search контроллера
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
        this.img = recipe.data.recipe.publisher_url;
        this.ingredients = recipe.data.recipe.ingredients;
      } catch(error) {
        alert(error);
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
}
