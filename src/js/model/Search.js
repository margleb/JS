import axios from 'axios';

export default class Search {
    constructor(query) {
        this.query = query;
    }
    async getRecepie() {
        const url = `https://forkify-api.herokuapp.com/api/search?q=${this.query}`;
        try {
            const dataRec = await axios(url);
            this.result = dataRec.data.recipes;
            // console.log(this.result);
        } catch(error) {
            alert(`1ая ошибка search ${error}`);
        }
    }   
}

