
// TYPES
import globalActions from './globalActions';

const { types } = globalActions;

const initialValue = {
    lang: null,
    loading: false
}

function globalReducer(state = initialValue, action) {
    switch (action.type) {

        case types.SET_LANG:
            return {
                ...state,
                lang: action.payload
            }

        case types.SET_LOADING:
        return {
            ...state,
            loading: action.payload
        }
    
        default:
            return state;
    }
}

export default globalReducer;
