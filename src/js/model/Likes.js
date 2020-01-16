/***
1. Cоздаем класс Likes
  - в конструкторе создаем мессив likes
  - метод addlike(), передающий аргументы id, title, author, img
    - cоздает обьект и помещает в массив likes
  - метод deleteLike
    - находит элемент findIndex и удалет его из likes, методом splice
  - метод isLiked
    - возращет true/false есть ли лайк или нет (findIndex())
  - метод getNumLikes()
    - возращает кол-во лаков в массиве likes
***/

export default class Likes {
    constructor() {
        this.likes = [];
    }
    
    addLike(id, title, author, img) {
        const like = { id, title, author, img };
        this.likes.push(like);
        return like
    }
    deleteLike(id) {
        const index = this.likes.findIndex(el => el.id == id);
        this.likes.splice(index, 1);
    }
    
    isLiked(id) {
        return this.likes.findIndex(el => el.id === id) !== -1;
    }
    
    getNumLikes() {
        return this.likes.length
    }
}