
export function movie(state = [], action) {
    switch (action.type) {
        case 'LOAD_ITEMS': {
            return [...action.items];
        }
        default: {
            return state;
        }
    }
}