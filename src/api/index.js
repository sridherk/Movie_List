import axios from 'axios';

const apiUrl = "http://www.omdbapi.com/?i=tt3896198&apikey=fa281222";
export default {
    loadAllItems() {
        return axios.get(apiUrl);
    },
    loadSearchedItems(item,page) {
        return axios.get(apiUrl + `&s=${item}&page=${page}`);
    }
}