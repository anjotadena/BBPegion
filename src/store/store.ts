import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';

import authReducer from './auth';

const rootReducer = combineReducers({
  authUser: authReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

const store = configureStore({
  reducer: rootReducer,
});

// Nothing special here...
// just following @reduxjs/toolkit documentation
// https://redux-toolkit.js.org/usage/usage-with-typescript

// helpers
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
