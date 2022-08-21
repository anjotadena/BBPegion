import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';

import store, {RootState} from './store';

// Nothing special here...
// just following @reduxjs/toolkit documentation
// https://redux-toolkit.js.org/usage/usage-with-typescript
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
