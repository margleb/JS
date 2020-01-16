/***
1. Создаем метод сохранения в localStorage массив likes
   - конвертируем в json
2. Cоздаем метод readStorage()
   - получает из storage значение likes и конвертирует его образтно из JSON
   - создаем проверку на наличие likes d localStorage и восстанавливаем их в this.likes
3. Cоздаем в контроллере слушатель события 'load'
***/

export default class Likes {
    constructor() {
        this.likes = [];
    }
    
    addLike(id, title, author, img) {
        const like = { id, title, author, img };
        this.likes.push(like);
        
        // Persist data in localStorage
        this.persistData();
        
        return like
    }
    deleteLike(id) {
        const index = this.likes.findIndex(el => el.id == id);
        this.likes.splice(index, 1);
        
        // Persist data in localStorage
        this.persistData(); 
    }
    
    isLiked(id) {
        return this.likes.findIndex(el => el.id === id) !== -1;
    }
    
    getNumLikes() {
        return this.likes.length
    }
    
    persistData() {
        localStorage.setItem('likes', JSON.stringify(this.likes))
    }
    readStorage() {
        const storage = JSON.parse(localStorage.getItem('likes'));
        // Restoring likes from the localStorage
        if (storage) this.likes = storage;
    }
    
}