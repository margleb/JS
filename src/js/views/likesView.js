/***
1. Создаем экспортируем функцию toggleLikeBtn
   - переменная iconString c классом в зав-мости от нажатия кнопки
   - ссылке класса recipe__love use  добавляем в хеш окончание iconString
   - выводим в контроллер функцию
2. В RecepieView в метод Recepie передаем тернарным оператором сотояние isLikes
   - меняем состояние href иконки
   - передаем аргумент в контроллере Recepie
3. Выносим в голобно state.likes = new Likes(); так как при перегрузке странцы
   state.ikes.isLikes() не существует КОСТЫЛЬ ИЗ КУРСА!
4. Создаем экспортируемую функцию toggleLikeMenu
   - меняет состояние DOM элемента в зависимости от кол-ва лайков
5. Cоздаем renderLike функцию, вывода списка лайков
6. Создаем функцию deleteLike, позволяющую элемент из интерфейса
7. Из searchView экспортируем функцию лимитированног тайтла и используем ее в likesView модели 

***/

import {DOMElements} from './base';
import { titlelimit } from './searchView';


export const toggleLikeBtn = isLiked => {
  const iconString = isLiked ? 'icon-heart' : 'icon-heart-outlined';
  document.querySelector('.recipe__love use').setAttribute('href', `img/icons.svg#${iconString}`);
 // icons.svg#icon-heart-outlined    
};

export const toggleLikeMenu = numLikes => {
    DOMElements.likesMenu.style.visibility = numLikes  > 0 ? 'visible' : 'hidden';
}

export const renderLike = like => {
const markup = `
<li>
   <a class="likes__link" href="#${like.id}">
      <figure class="likes__fig">
         <img src="${like.img}" alt="${like.title}">
      </figure>
      <div class="likes__data">
         <h4 class="likes__name">${titlelimit(like.title)}</h4>
         <p class="likes__author">${like.author}</p>
      </div>
   </a>
</li>
`;
DOMElements.likesList.insertAdjacentHTML('beforeend', markup);
}

export const deleteLike = id => {
    const el = document.querySelector(`.likes__link[href*="${id}"]`).parentElement;
    if(el) el.parentElement.removeChild(el);
}