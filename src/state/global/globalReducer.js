
// TYPES
import globalActions from './globalActions';

const { types } = globalActions;

const initialValue = {
    lang: null
}

function globalReducer(state = initialValue, action) {
    switch (action.type) {
        case types.SET_LANG:
            
            return {
                ...state,
                lang: action.payload
            }
    
        default:
            return state;
    }
}

export default globalReducer;
