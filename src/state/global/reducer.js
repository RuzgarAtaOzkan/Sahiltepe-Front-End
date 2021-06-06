// TYPES
import types from './types';

const initialValue = {
  language: 'tr',
  loading: false,
};

function globalReducer(state = initialValue, action) {
  switch (action.type) {
    case types.SET_LANGUAGE:
      return {
        ...state,
        language: action.payload,
      };

    case types.SET_LOADING:
      return {
        ...state,
        loading: action.payload,
      };

    default:
      return state;
  }
}

export default globalReducer;
