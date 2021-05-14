// TYPES
const SET_LANGUAGE = 'SET_LANGUAGE';
const SET_LOADING = 'SET_LOADING';

// ACTIONS
function setLanguage(payload) {
  return {
    type: SET_LANGUAGE,
    payload,
  };
}

function setLoading(payload) {
  return {
    type: SET_LOADING,
    payload,
  };
}

const types = {
  SET_LANGUAGE,
  SET_LOADING,
};

const actions = {
  setLanguage,
  setLoading,
};

const _global = {
  types,
  actions,
};

export default _global;
