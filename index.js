/***
Для запуска пишем в консоле node
1. npm i nodemon -g // бибилиотека для авт. запуска файла в консоле

2. запрашиваем библиотеку fs для загрузки моделей node
3. прочитываем файл методом readFileSync()
4. парсим прочитанный файл в формат json с помочью JSON.parse();

5. Создаем сервер методом createServer();
   - создаем callback функцию вызываемую при доступе к серверу

6. Создаем методом listen прослушку порта 1337
   - переходим в браузер по порту http://127.0.0.1:1337/, смотрим выводится ли сообщение в консоле

7. Пробуем создат ответ при получении доступа к порту 1337
   - устанавливам заголовок (writeHead);
   - пишем ответ (end);
   - проверяем в бразузере по порту http://127.0.0.1:1337/
   - смотрим что в network пришел ответ со статусом 200

8. Cоздаем маршрутизацию
   - подключаем модуль url
   - в методе createServer получаем доступ к запрашиваемому url
     - используем req.url и метод parse для преобразования запроса по url в обьект
     - используем условия if/else проверки получаемего url
     - проверяем условия в браузере

9. Получаем id из url
   - получаем id query из спарсенного url (url.parse(req.url, true).query.id);

10. Добавляем условие что id должно быть меньше чем кол-во ноудбуков

***/

// console.log('Hello World');
// console.log('Second World');

const fs = require('fs');
const http = require('http');
const url = require('url');

const json = fs.readFileSync(`${__dirname}/data/data.json`, 'utf-8');

const laptopData = JSON.parse(json);

// колбек функция срабатывает каждый раз при запросе к серверу
const server = http.createServer((req, res) => { 
    // console.log('Somone did access the server!');

    // console.log(req.url);
    const pathname = url.parse(req.url, true).pathname;
    const id = url.parse(req.url, true).query.id;

//    console.log(laptopData);
//    console.log(url.parse(req.url, true));
    
    // console.log(pathname);
    if(pathname == '/products' || pathname === '') {
        // пишем заголовок (header)
        res.writeHead(200, { 'Content-type': 'text/html'})
        // выводим ответ
        res.end('This is the PRODUCTS page!');        
    } else if (pathname == '/laptop' && laptopData.length > id) {
        // пишем заголовок (header)
        res.writeHead(200, { 'Content-type': 'text/html'})
        // выводим ответ
        res.end(`This is the LAPTOP page for laptop ${id}!`);           
    } else {
        res.writeHead(404, { 'Content-type': 'text/html'})
        // выводим ответ
        res.end('URL was not found on the server!');   
    }

    
});

// cлушать порт на ip 127.0.0.1
server.listen(1337, '127.0.0.1', () => {
   console.log('Listening for request now'); 
});

