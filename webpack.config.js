/** 
1. Устанавливаем пакеты:
   - npm install babel-core (осн. функционал компилятора) babel-preset-env babel-loader --save-dev
2. Устанавливаем обьект module:
   module: {
       rules: [
           {
               test: '/\.js$/',
               exclude: '/node_modules/',
               use: {
                   loader: 'babel-loader'
               }
           }
       ]
   }
3. Cоздаем конфиг файл для babel .babelrc
   - cоздаем обьект
      - { "presets": [
        ["env", {
            "targets": {
                "browser": [
                    "last 5 versions",
                    "ie >= 8"
                ]
            }
        }
            
        ]
    ]
}  
4. Устанавливаем пакет babel-polyfill --save (работает с фичами которых нет в ES5)
5. Добавляем, в entry 'babel-polyfill'

6. Тестируем
   - в index.js добавляем еще одну переменную константу и выводим в консоль
   - пробуем запустить npm run dev
**/

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: ['babel-polyfill', './src/js/index.js'],
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'js/bundle.js'
    },
    devServer: {
        contentBase: './dist'
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/index.html'
        })
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    }
};
