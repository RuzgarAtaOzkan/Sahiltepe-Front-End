// TYPES
export const SIGN_IN = 'SIGN_IN';
export const SIGN_UP = 'SIGN_UP';
export const SIGN_OUT = 'SIGN_OUT';

// ACTIONS
export function signIn(payload) {
  return {
    type: SIGN_IN,
    payload,
  };
}

export function signUp(payload) {
  return {
    type: SIGN_UP,
    payload,
  };
}

export function signOut(payload) {
  return {
    type: SIGN_OUT,
    payload,
  };
}

const types = {
  SIGN_IN,
  SIGN_UP,
  SIGN_OUT,
};

const actions = {
  signIn,
  signUp,
  signOut,
};

const _user = {
  types,
  actions,
};

export default _user;
