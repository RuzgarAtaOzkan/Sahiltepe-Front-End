// TYPES
import types from './types';

const initialValue = {
  user: null,
};

function userReducer(state = initialValue, action) {
  switch (action.type) {
    case types.SIGN_IN:
      return {
        ...state,
        user: action.payload,
      };

    default:
      return state;
  }
}

export default userReducer;
