// Budget controller
var budgetController = (function() {
    // Some code   
})();

// Ui controller
var UIController = (function() {
    // Some code
})();

// Global App Controller
var controller = (function(budgetCtrl, UICtrl) {
    
    var ctrlAddItem = function() {
       // 1. Get the field input data
       // 2. Add the item to the budget controller
       // 3. Add the item to the UI
       // 4. Calculate the budget
       // 5. Display the budget on the UI
       console.log('It works');
    }
    
    // событие при клике на кнопку
    document.querySelector('.add__btn').addEventListener('click', ctrlAddItem);
    
    // событие при нажатии на кнопку на клавиатуре
    document.addEventListener('keypress', function(event) {
        // witch для старых браузеров
        // 13 - кнопка enter
        if(event.keyCode === 13 || event.witch == 13) {
            ctrlAddItem();
        }
    })
    
})(budgetController, UIController);