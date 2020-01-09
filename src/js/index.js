// Global app controller

/***
1. Регистриуемся на сервисе
   - API http://forkify-api.herokuapp.com/
2. Устанавливаем axios --save и подключем его
3. Cоздаем async функцию getRecepie()
4. Создаем константы proxy/url/query/key
5. Возращаем данные о рецептах в соответствии с запросом
   - используем await
6. Обрабатываем вывод ошибок try/catch
***/

var axios = require('axios');

async function getRecepie(query) {
    const url = `https://forkify-api.herokuapp.com/api/search?q=${query}`;
    try {
        let dataRec = await axios(url);
        let Recepies = dataRec.data.recipes;
        console.log(Recepies);   
    } catch(error) {
        alert(error);
    }
}

getRecepie('pizza');
