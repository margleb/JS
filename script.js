var massMark = 78; // kg
var heighMark = 1.69; // meters

var massJohn = 92;
var heightJohn = 1.95;

var BMIMark = massMark / (heighMark * heighMark);
var BMIJohn = massJohn / (heightJohn * heightJohn);

if(BMIMark > BMIJohn) {
    console.log('Mark\'s BMI is higher than John\'s');
} else {
    console.log('John\' BMI is higher than Marks\'s');
}