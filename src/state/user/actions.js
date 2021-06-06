import types from './types';

// ACTIONS
export function signIn(payload) {
  return {
    type: types.SIGN_IN,
    payload,
  };
}

export function signUp(payload) {
  return {
    type: types.SIGN_UP,
    payload,
  };
}

export function signOut(payload) {
  return {
    type: types.SIGN_OUT,
    payload,
  };
}

const actions = {
  signIn,
  signUp,
  signOut,
};

export default actions;
