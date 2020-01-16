import uniqid from 'uniqid';

/***
1. Устанавливаем библиотеку npm i uniqid --save

2. Cоздаем экспортируемый класс List
   - в конструкторе создаем пустой массив this.items
   - создаем метод addItem
     - аргументы count, unit, ingredient
     - создаем обьект с пер. аругментов + id: uniqid();
     - добавляем массив items (push метод)
   - создаем метод deleteItem, аргумент id
     - c помочью findIndex и уникального id находим id элемента
     - удаляем элемент с помочью функции splice
   - cоздаем метод updateCount, аргументы id, newCount
     - c помочью метода find() находим эл. и присваиваем его newCount;
***/


export default class List {
    constructor() {
        this.items = []
    }
    addItem(count, unit, ingredient) {
        const item = {
            id: uniqid(),
            count,
            unit,
            ingredient
        }
        this.items.push(item);
        return item;
    }
    deleteItem(id) {
      const index = this.items.findIndex(el => el.id === id)
          
      // второй аргумен указывает на кол-во эл. которые мы хотим взять
      // [2,4,8] splice(1, 2) -> returns [4,8], original array is [2];
      
      // второй аргумент указывает на последний элемент
      // [2,4,8] slice(1, 2) -> returns 4, original array is [2,4,8];
      this.items.splice(index, 1);
    }
    
    updateCount(id, newCount) {
        this.items.find(el => el.id === id).count = newCount;
    }
}