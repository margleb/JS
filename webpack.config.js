/** 
1. Устанавливаем npm i webpack-dev-server --save-dev (автоматическая сборка + reload браузера)
   - Добавляем обьект devServer
       - указываем contentBase: './dist' (где devServer должен мониторить наши файлы)
       - contentBase и output path должы быть одинаковыми
   - Добавляем start: "webpack-dev-server --mode devolepment --open" скрипт в  package.json
     (флаг open указывает на автоматическе открытие окна браузера при запуске скрипта)

2. Устанавливаем npm i html-webpack-plugin --save-dev позваляеющий автоматически перегенерировать файл index.html в dist 
   (перегенерированный файл не сохраняется на диск! Для этого используем npm run dev)
   - Подключаем плагин в webpack.config.js require('html-webpack-plugin');
   - В обьект module.exports, добавляем массив plugins: [new HTMLWebpackPlugin()]
     - В качестве аргумента передаем обьект cо свойствами:
       - filename: 'index.html',
       - template: './src/index.html'
**/

const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/js/index.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'js/bundle.js'
  },
  devServer: {
    contentBase: './dist'
},
  plugins: [new htmlWebpackPlugin({
      filename: 'index.html',
      template: './src/index.html'
  })],
};