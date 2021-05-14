// TYPES
const SET_LANGUAGE = 'SET_LANGUAGE';
const SET_LOADING = 'SET_LOADING';

// ACTIONS
function language(payload) {
  return {
    type: SET_LANGUAGE,
    payload,
  };
}

function loading(payload) {
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
  language,
  loading,
};

const _global = {
  types,
  actions,
};

export default _global;
