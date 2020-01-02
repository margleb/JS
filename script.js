/////////
// Lecture: Rest parameters

/*
// ES5
function isFullAge5() {
    // console.log(arguments);
    var argsArr = Array.prototype.slice.call(arguments);
    argsArr.forEach(function(cur) {
       console.log((2016 - cur) >= 18); 
    });
}

// isFullAge5(1990, 1999, 1965);
// isFullAge5(1990, 1999, 1965, 2016, 1987);


// ES6
// трансформирует параметры в массив и вставляет их в функцию
function isFullAge6(...years) {
    years.forEach(cur => console.log((2016 - cur) >= 18));
}

isFullAge6(1990, 1999, 1965, 2016, 1987);
*/


function isFullAge5(limit) {
    // второй параметр call позволяет вычленить взять в массив параметры без учета первого
    var argsArr = Array.prototype.slice.call(arguments, 1);
    argsArr.forEach(function(cur) {
       console.log((2016 - cur) >= limit);
    });
}

// isFullAge5(10, 1990, 1999, 1965);
// isFullAge5(1990, 1999, 1965, 2016, 1987);


// ES6
// трансформирует параметры в массив и вставляет их в функцию
function isFullAge6(limit, ...years) {
    years.forEach(cur => console.log((2016 - cur) >= limit));
}

isFullAge6(16, 1990, 1999, 1965, 2016, 1987);