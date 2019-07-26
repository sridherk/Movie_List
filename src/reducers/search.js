const initialVal = {
    value : '',
    totalResults : 0
}
export function search(state = initialVal, action) {
    switch (action.type) {
        case 'SEARCH_PARAMS': {
            return action.searchVal;
        }
        default: {
            return state;
        }
    }
}