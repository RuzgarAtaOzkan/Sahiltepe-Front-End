
// TYPES
const SET_LANG = 'SET_LANG';
const SET_LOADING = 'SET_LOADING';

// ACTIONS
function langAction(payload) {
    return {
        type: SET_LANG,
        payload
    }
}

function loading(payload) {
    return {
        type: SET_LOADING,
        payload
    }
}

const types = {
    SET_LANG,
    SET_LOADING
}

const actions = {
    langAction,
    loading
}

const userActions = {
    types,
    actions  
}

export default userActions;
