// TYPES
import types from './types';

// ACTIONS
function setLanguage(payload) {
  return {
    type: types.SET_LANGUAGE,
    payload,
  };
}

function setLoading(payload) {
  return {
    type: types.SET_LOADING,
    payload,
  };
}

const actions = {
  setLanguage,
  setLoading,
};

export default actions;
