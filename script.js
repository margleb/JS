// Budget controller
var budgetController = (function() {
    
    var Expense = function(id, description, value) {
        this.id = id;
        this.descritption = description;
        this.value = value;
    };
    
     var Income = function(id, description, value) {
        this.id = id;
        this.descritption = description;
        this.value = value;
    };   
    
    var data = {
        allItems: {
            exp: [],
            inc: []
        },
        totals: {
            exp: 0,
            inc: 0
        }
    };
    
})();


// Ui controller
var UIController = (function() {
    var DOMstrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputВtn: '.add__btn',
    };
    return {
        // Метод, возвращающие 3 значения
        getInput: function() {
            return {
            type: document.querySelector(DOMstrings.inputType).value, // Will be either inc of exp
            description: document.querySelector(DOMstrings.inputDescription).value,
            value: document.querySelector(DOMstrings.inputValue).value, 
            }
        },
        getDOMstrings: function() {
          return DOMstrings;
        }
    };
})();

// Global App Controller
var controller = (function(budgetCtrl, UICtrl) {
    
    var setupEventListeners = function() {
        var DOM = UICtrl.getDOMstrings();
        
        // событие при клике на кнопку
        document.querySelector(DOM.inputВtn).addEventListener('click', ctrlAddItem);

        // событие при нажатии на кнопку на клавиатуре
        document.addEventListener('keypress', function(event) {
            // witch для старых браузеров
            // 13 - кнопка enter
            if(event.keyCode === 13 || event.witch == 13) {
                ctrlAddItem();
            }
        });
    };
    
    
    
    var ctrlAddItem = function() {
       // 1. Get the field input data
       var input = UICtrl.getInput();
        
       // 2. Add the item to the budget controller
       // 3. Add the item to the UI
       // 4. Calculate the budget
       // 5. Display the budget on the UI
    };
    
    return {
        init: function() {
            console.log('Application has started.');
            setupEventListeners();
        }
    };
    
})(budgetController, UIController);

// инициализация при запуске приложения
controller.init();