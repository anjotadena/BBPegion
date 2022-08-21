import {combineReducers, configureStore} from '@reduxjs/toolkit';

// all imported reducers will be here...
import authReducer from './auth';

const rootReducer = combineReducers({
  authUser: authReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

const store = configureStore({
  reducer: rootReducer,
});

export default store;
