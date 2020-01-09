/***
1. Cоздаем класс экспортируемый Search (не забываем сделать "экспорт по умолчанию")
   - в construct() передаем параметр query
   - переносим мето getRecipie из контроллера
     - cохраняем полученные данные от сервера в переменную data
   - import axios from 'axios'
2. Импортируем Search модель в контроллер
3. Пытаемся получить рецепты в контроллере
***/

import axios from 'axios';

export default class Search {
    constructor(query) {
        this.query = query;
    }
    async getRecepie() {
        const url = `https://forkify-api.herokuapp.com/api/search?q=${this.query}`;
        try {
            const dataRec = await axios(url);
            this.result = dataRec.data.recipes;
            // console.log(this.result);
        } catch(error) {
            alert(error);
        }
    }   
}

