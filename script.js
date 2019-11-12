//////////////////////////
// Lecture: IIFE

/* IIFE (Immediately Invoked Function Expression) это JavaScript функция, которая выполняется сразу же после того, как она была определена. */

/*
function game() {
    var score = Math.random() * 10;
    console.log(score >= 5); 
}
game();
*/

(function() {
    var score = Math.random() * 10;
    console.log(score >= 5); 
})();
// undefined
// console.log(score);

// с передачей параметра
(function(goodLuck) {
    var score = Math.random() * 10;
    console.log(score >= 5 - goodLuck); 
})(5);



