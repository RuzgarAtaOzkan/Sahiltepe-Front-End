// MODULES
import { combineReducers, createStore } from 'redux';

// REDUCERS
import globalReducer from './global/reducer';
import userReducer from './user/reducer';

// GLOBAL REDUCER
const rootReducer = combineReducers({
  user: userReducer,
  global: globalReducer,
});

// STORE
const store = createStore(rootReducer);

export default store;
