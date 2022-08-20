import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {authReducer} from './reducers';

const rootReducer = combineReducers({
  authUser: authReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

const store = configureStore({
  reducer: rootReducer,
});

export default store;
