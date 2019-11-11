// обьект john
var john = {
    fullName: 'John Smith',
    // cчета из 5 рестаранов
    bills: [124,48,268,180,42],
    // метод подсчета чаевых
    calcTips: function() {
        this.tips = []; // чаевые
        this.finalValues = []; // финальная стоимость (счет + чаевые)
        for(var i = 0; i < this.bills.length; i++)
        {
            var percentage; // определение процента чаевых
            
            var bill = this.bills[i];
            
            if(bill < 50) {
                // 20 процентов, если меньше 50$
                percentage  = .2;
            } else if (bill >= 50 && this.bills[i] < 200) {
                // 15 процентов, если больше 50$ и меньше 200$
                percentage = .15;
            } else {
                // 10 процентов в остальных случаях
                percentage = .1;
            }
            
            // Добавляем результат в опрделенные массив
            this.tips[i] = bill * percentage;
            this.finalValues[i] = bill + bill * percentage;
        }
    }
}

// обьект mark
var mark = {
    fullName: 'Mark Miller',
    // cчета из 5 рестаранов
    bills: [77, 475, 110, 45],
    // метод подсчета чаевых
    calcTips: function() {
        this.tips = []; // чаевые
        this.finalValues = []; // финальная стоимость (счет + чаевые)
        for(var i = 0; i < this.bills.length; i++)
        {
            
            var percentage; // определение процента чаевых
            var bill = this.bills[i];
            
            if(bill < 100) {
                // 20 процентов, если меньше 100$
                percentage  = .2;
            } else if (bill >= 100 && this.bills[i] < 300) {
                // 10 процентов, если больше 100$ но менше 300$
                percentage = .1;
            } else {
                // в остальных случаях 25 процентов
                percentage = .25;
            }
            
            // Добавляем результат в опрделенные массив
            this.tips[i] = bill * percentage;
            this.finalValues[i] = bill + bill * percentage;
        }
    }
}

function calcAverage(tips) {
    var sum = 0;
    for (var i = 0; i < tips.length; i++) {
        sum = sum + tips[i];
    }
    // подсчет среднего значения чаевых
    return sum / tips.length;
}

// Вычесляем процент чаевых для 5 ресторанов
john.calcTips();
mark.calcTips();

// добавляем среднее значение чаевых для 5 ресторанов в обьекты
john.average = calcAverage(john.tips);
mark.average = calcAverage(mark.tips);
// console.log(john, mark);


// выводим, кто из них заполатил больше чаевых
if(john.average > mark.average) {
    console.log('Cемья ' + john.fullName + ' заплатила больше чаевых, среднее значеение которых составило $' + john.average);
} else if(mark.average  > john.average) {
    console.log('Cемья ' + mark.fullName + ' заплатила больше чаевых, среднее значеение которых составило $' + mark.average);
}