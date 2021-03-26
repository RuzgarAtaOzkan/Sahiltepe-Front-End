
// MODULES
import { combineReducers, createStore } from 'redux';

// REDUCERS
import globalReducer from './global/globalReducer';
import userReducer from './user/userReducer';

const rootReducer = combineReducers({
    user: userReducer,
    global: globalReducer
});

const store = createStore(rootReducer);

export default store;
