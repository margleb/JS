/*
GAME RULES:
- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game
*/

var scores, roundScore, activePlayer;

// добавляем переменные
init();

// Math - обьект, математических исчеслений
// floor() - метод, для округления
// random() - метод, случайное число
// console.log(dice);

// Document - обьект для DOM манипуляций
// QuerySelector - метод определения элемента на странице
// textContent - св-во изменения текста на странице
// innerHTML - cв-во добавляет html в DOM
// document.querySelector('#current-' + activePlayer).textContent = dice
// document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>'

// Без присваивания выводит значение элемента html
// var x = document.querySelector('#score-0').textContent;
// console.log(x);


// Стандартные события
// https://developer.mozilla.org/en-US/docs/Web/Events
// Коллбэк функция - функция вызываемая другой функцией
document.querySelector('.btn-roll').addEventListener('click', function() {
    // 1. Random number
    var dice = Math.floor(Math.random() * 6) + 1;
    // 2. Display the result
    var diceDOM = document.querySelector('.dice');
    diceDOM.style.display = 'block';
    // src - cвойство изменения scr атрибута
    diceDOM.src = 'dice-' + dice + '.png';
    // 3. Update the round scrore if the rolled number is not one
    if (dice !== 1) {
        // Добавляем счет
        roundScore += dice;
        document.querySelector('#current-' + activePlayer).textContent = roundScore;
    } else {
        // Следующий игрок
        nextPlayer();
    }
});

document.querySelector('.btn-hold').addEventListener('click', function() {
   // Добавить текущий счет к глобальному счету
    scores[activePlayer] += roundScore;
   // Обновить UI
    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
    
   // Проверить выиграл ли пользователь игру
   if(scores[activePlayer] >= 20) {
       document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
       document.querySelector('.dice').style.display = 'none';
       document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
       document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
   } else {
       // Cледующий игрок
       nextPlayer();       
   }
    
});


function nextPlayer() {
    // Следующий игрок
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
        
    // удалить класс
    // document.querySelector('.player-0-panel').classList.remove('active');
    // добавить класс
    // document.querySelector('.player-1-panel').classList.add('active');
        
    // удалить/ добавить класс
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
    // удалить кубик при переключении игрока
    document.querySelector('.dice').style.display = 'none';
}

document.querySelector('.btn-new').addEventListener('click', init);

function init() {
scores = [0,0];
activePlayer = 0;
roundScore = 0;   
// изменение свой-ва элемента
// style - метод, css
// property - cв-во style
document.querySelector('.dice').style.display = 'none';
// получить элемент по id
document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';
document.getElementById('name-0').textConent = 'Player 1';
document.getElementById('name-1').textConent = 'Player 2';
document.querySelector('.player-0-panel').classList.remove('winner');
document.querySelector('.player-1-panel').classList.remove('winner');
document.querySelector('.player-0-panel').classList.remove('active');
document.querySelector('.player-1-panel').classList.remove('active');
// добавляем класс active по дефолту первому игроку
document.querySelector('.player-0-panel').classList.add('active');
}