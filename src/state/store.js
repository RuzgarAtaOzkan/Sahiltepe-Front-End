// MODULES
import { combineReducers, createStore } from 'redux';

// REDUCERS
import globalReducer from './global/globalReducer';
import userReducer from './user/userReducer';

// global state
const rootReducer = combineReducers({
  user: userReducer,
  global: globalReducer,
});

// STORE
const store = createStore(rootReducer);

export default store;
