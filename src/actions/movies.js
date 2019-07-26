import api from '../api';

export function loadItems(item,page) {
    return function (dispatch) {
        dispatch({ type: 'REQUEST_BEGIN', message: 'Loading Items...' })
        api
            .loadSearchedItems(item,page)
            .then(response => {
                if(response.data.Response==="True"){
                    dispatch({ type: 'LOAD_ITEMS', items: response.data.Search })
                    dispatch({ type: 'SEARCH_PARAMS', searchVal: {value:item, totalResult:response.data.totalResults} })
                    dispatch({ type: 'REQUEST_END', message: '' })
                }else{
                    dispatch({ type: 'LOAD_ITEMS', items: [] })
                    dispatch({ type: 'REQUEST_END', message: response.data.Error })
                }

            })
            .catch(error => {
                //error
                dispatch({ type: 'REQUEST_END', message: 'Welcome, Search for Movie' })                
            })
    }

}