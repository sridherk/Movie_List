
export function requestStatus(state = {}, action) {
    switch (action.type) {
        case 'REQUEST_BEGIN': {
            let { message } = action;
            return { message }
        }
        case 'REQUEST_END': {
            let { message } = action;
            return { message }
        }
        case 'REQUEST_ERROR': {
            let { message } = action;
            return { message }
        }
        default:
            return state;

    }
}