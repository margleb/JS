/*
GAME RULES:
- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game
*/

// глобальные переменные
var scores, roundScore, activePlayer;

init(); // инициализация

// cобытие клик на rolle dice
document.querySelector('.btn-roll').addEventListener('click', function() {
    // Случайное число
    var dice = Math.floor(Math.random() * 6) + 1;
    // Селектор для кубика
    var diceDOM = document.querySelector('.dice');
    // Отображение кубика display block
    diceDOM.style.display = 'block';
    // cмена изображения кубика
    diceDOM.src = 'dice-' + dice + '.png';
    // Если выпадшее число не равно 1
    if (dice == 1) {
        nextPlayer(); // Следующий игрок
    } else {
        roundScore += dice; // доавляем к счету
        document.querySelector('#current-' + activePlayer).textContent = roundScore;
    }
   
});

// событие клик на hold
document.querySelector('.btn-hold').addEventListener('click', function() {
    // Добавить счет к игроку
    scores[activePlayer] += roundScore;
    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
    
   // Если счет игрока превысил 20
   if(scores[activePlayer] >= 20) {
       // обьявляем игрока победителем
       document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
       // cкрываем отображение кубика
       document.querySelector('.dice').style.display = 'none';
       // добавляем победителю класс winner и удаляем активный класс
       document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
       document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
   } else {
       nextPlayer(); // Cледующий игрок      
   }
});

// событие при нажатии на кнопку new game
document.querySelector('.btn-new').addEventListener('click', init);


function nextPlayer() {
    // cменяем активного игрока
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0; // обнуляем счет
    // удаляем счет из красных областей
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    // удалить/добавить активный класс у игроков
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
    // скрыть кубик при переключении игрока
    document.querySelector('.dice').style.display = 'none';
};

function init() {
scores = [0,0]; // cчет
activePlayer = 0; // активный игрок
roundScore = 0;  // обнулить счет
// по умолчанию кубик отключен
document.querySelector('.dice').style.display = 'none';
// счет по умолчанию равен 0
document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
// текущий счет по умлочанию равен 0
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';
// заголовки по умолчанию равны
document.getElementById('name-0').textContent = 'Player 1';
document.getElementById('name-1').textContent = 'Player 2';
// класс winner при сбросе игры удаляется
document.querySelector('.player-0-panel').classList.remove('winner');
document.querySelector('.player-1-panel').classList.remove('winner');
// класс active по умолчанию удаляется
document.querySelector('.player-0-panel').classList.remove('active');
document.querySelector('.player-1-panel').classList.remove('active');
// первому игрку выставляется класс active
document.querySelector('.player-0-panel').classList.add('active');
}