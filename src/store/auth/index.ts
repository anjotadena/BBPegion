import {createSlice} from '@reduxjs/toolkit';

import {RootState} from '../store';
import {
  AUTH_USER_KEY,
  STATUS_TYPE_IDLE,
  STATUS_TYPE_LOADING,
} from './index.constant';
import {loginUser} from './index.reducer';
import {initialState} from './index.state';
import {AuthLoginUserError, AuthUserState} from './index.type';

const authUserSlice = createSlice({
  name: AUTH_USER_KEY,
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(loginUser.pending, (state: AuthUserState) => {
        state.status = STATUS_TYPE_LOADING;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state: AuthUserState, {payload}) => {
        state.authUser = payload;
        state.status = STATUS_TYPE_IDLE;
      })
      .addCase(loginUser.rejected, (state: AuthUserState, {payload}) => {
        if (payload) {
          state.error = payload;
        }
        state.status = STATUS_TYPE_IDLE;
      });
  },
});

// Actions
export const authAction = authUserSlice.actions;

// Selectors
export const selectStatus = (state: RootState): string | undefined =>
  state.authUser.status;

export const selectError = (
  state: RootState
): AuthLoginUserError | null | undefined => state.authUser.error;

// Reducers
export default authUserSlice.reducer;
