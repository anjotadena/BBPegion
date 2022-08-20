import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {useDispatch} from 'react-redux';

import {authReducer} from './reducers';

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
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;

export default store;
