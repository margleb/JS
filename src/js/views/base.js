export const DOMElements = {
    inputField: document.querySelector('.search__field'),
    searchBtn: document.querySelector('.search'),
    resultsList: document.querySelector('.results__list'),
    searchRes: document.querySelector('.results'),
    resPages: document.querySelector('.results__pages'),
    recipe: document.querySelector('.recipe'),
    shopping: document.querySelector('.shopping__list'),
    likesMenu: document.querySelector('.likes__field'),
    likesList: document.querySelector('.likes__list'),
}

export const ElementString = {
    loader: 'loader'
}

export const renderLoader = (parent) => {
const loader =  
`
<div class="${ElementString.loader}">
   <svg>
      <use href="img/icons.svg#icon-cw"></use>
   </svg>
</div>
`
parent.insertAdjacentHTML('afterbegin', loader);
}


export const cleanLoader = () => { 
    var loader = document.querySelector(`.${ElementString.loader}`);
    if (loader) loader.parentElement.removeChild(loader);
}