/** 
1. Cоздаем экспортируемый обьект для webpack с настройками (файл webpack.config.js)
    - Cоздаем "входную точку" (entry:'./src/js/index.js') c указанием файла с которого webpack начне пакетирование зависимостей
    - Создаем обьект output ("выходную  точку"), указывающую где сохранить скомпилированный файл
        - переменная path c указанием абсолютного пути __dirname + папка сборки 'dist/js';
        - имя фафла filename: 'bundle.js'
    - Указываем мод разработки 'development' или для минификации файла 'production'
2. Тестируем   
    - Создаем файл test.js в src/js папке
      - сonsole.log('Imported module');
      - экспортируем дефолтное значение 23;
    - В index.js импортируем num из './test';
      - console.log('I impoerted ${num} from another module!');
3. Импортируем npm скрипт в package.json
4. Установиваем интерфейс командной строки npm webpack-cli --save-dev.
5. Запускаем скрипт npm run dev через командрную строку
6. Создаем index.html файл в  папке dist/index.html
   - разметка html + подключаем bundgle.js
   - проверяем что в консоле выводится console.log
7. Cоздаем в package.json два скрипта dev и build
   - dev: webpack --mode development, // для разработки
   - build: webpack --mode production // минифицированный для продашена
**/

const path = require('path');

module.exports = {
  entry: './src/js/index.js',
  output: {
    path: path.resolve(__dirname, 'dist/js'),
    filename: 'bundle.js'
  },
  // mode: 'development'
};