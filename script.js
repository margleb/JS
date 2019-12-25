// Budget controller
var budgetController = (function() {
    
    var Expense = function(id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    };
    
     var Income = function(id, description, value) {
        this.id = id;
        this.description = description;
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
    
    return {
        addItem: function(type, des, val) {
            var newItem, ID;
            // Create new ID
            if(data.allItems[type].length > 0) {
                ID = data.allItems[type][data.allItems[type].length - 1].id + 1;   
            } else {
                ID = 0;
            }
            // Create new item based on 'inc' or 'exp' type
            if(type == 'exp') {
                newItem = new Expense(ID, des, val);   
            } else if (type == 'inc') {
                newItem = new Income(ID, des, val);
            }
            // Push it into data structure
            data.allItems[type].push(newItem);
            // Retrurn the new element
            return newItem;
        },
        
        testing: function() {
            console.log(data);
        }
    }
    
})();


// Ui controller
var UIController = (function() {
    var DOMstrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputВtn: '.add__btn',
        incomeContrainer: '.income__list',
        expensesContainer: '.expenses__list'
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
        addListItem: function(obj, type) {
            var html, newHtml, element;
            // Create HTML string with placeholder text;
            
            if(type == 'inc') {
                element = DOMstrings.incomeContrainer;
                html = '<div class="item clearfix" id="income-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';        
            } else if(type == 'exp') {
                element = DOMstrings.expensesContainer;
                html = '<div class="item clearfix" id="expense-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__percentage">21%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';    
            }
            
            // Replace the plactholder text with some actual data
            newHtml = html.replace('%id%', obj.id);
            newHtml = newHtml.replace('%description%', obj.description);
            newHtml = newHtml.replace('%value%', obj.value);
            console.log(newHtml);
            // Insert the HTML into the DOM
            document.querySelector(element).insertAdjacentHTML('beforeend', newHtml);
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
       var input, newItem;
       // 1. Get the field input data
       var input = UICtrl.getInput();
       // 2. Add the item to the budget controller
       var newItem = budgetCtrl.addItem(input.type, input.description, input.value);
       // 3. Add the item to the UI
       UICtrl.addListItem(newItem, input.type);
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