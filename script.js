// модуль
var budgetController = (function() {
    // private
    var x = 23;
    var add = function(a) {
        return x + a;
    }  
    /* Closures */
    return {
        publicTest: function(b) {
            return add(b);
        }
    }
    
})();

// модуль
var UIController = (function() {
    // Some code
})();

// связующий модуль для budgetController и UIController
var controller = (function(budgetCtrl, UICtrl) {
    /* для лучшей практики, лучше всего передаваемые
    параметры называть другими именами, например
    budgetController = budgetCtrl; */
    var z = budgetCtrl.publicTest(5);
    
    return {
        anotherPublic: function() {
            console.log(z);
        }
    }
})(budgetController, UIController);