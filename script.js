/*
GAME RULES:
- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game
*/

var scores, roundScore, activePlayer, dice;

scores = [0, 0];
roundScrore = 0;
activePlayer = 1;

// Math - обьект, математических исчеслений
// floor() - метод, для округления
// random() - метод, случайное число
dice = Math.floor(Math.random() * 6) + 1;
console.log(dice);

// Document - обьект для DOM манипуляций
// QuerySelector - метод определения элемента на странице
// textContent - св-во изменения текста на странице
// innerHTML - cв-во добавляет html в DOM
document.querySelector('#current-' + activePlayer).textContent = dice
// document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>'

// Без присваивания выводит значение элемента html
var x = document.querySelector('#score-0').textContent;
console.log(x);

// изменение свой-ва элемента
// style - метод, css
// property - cв-во style
document.querySelector('.dice').style.display = 'none';