
// TYPES
export const SIGN_IN = 'SIGN_IN';
export const SIGN_UP = 'SIGN_UP';
export const SIGN_OUT = 'SIGN_OUT';

// ACTIONS
export function signInAction(payload) {
    return {
        type: SIGN_IN,
        payload
    }
}

export function signUpAction(payload) {
    return {
        type: SIGN_UP,
        payload
    }
}

export function signOutAction(payload) {
    return {
        type: SIGN_OUT,
        payload
    }
}

const types = {
    SIGN_IN,
    SIGN_UP,
    SIGN_OUT
}

const actions = {
    signInAction,
    signUpAction,
    signOutAction   
}

const userActions = {
    types,
    actions  
}


export default userActions;
