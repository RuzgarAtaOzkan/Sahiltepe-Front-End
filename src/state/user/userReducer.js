
// TYPES
import userActions from './userActions';

const { types } = userActions;

const initialValue = {
    user: null
}

function userReducer(state = initialValue, action) {
    switch (action.type) {
        case types.SIGN_IN:
            
            return {
                ...state,
                user: action.payload
            }
    
        default:
            return state;
    }
}

export default userReducer;
