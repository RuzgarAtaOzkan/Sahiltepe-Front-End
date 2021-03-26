
// TYPES
export const SET_LANG = 'SET_LANG';

// ACTIONS
export function setLangAction(payload) {
    return {
        type: SET_LANG,
        payload
    }
}

const types = {
    SET_LANG
}

const actions = {
    setLangAction
}

const userActions = {
    types,
    actions  
}

export default userActions;
