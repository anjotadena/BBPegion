import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';

import {loginUser as firebaseLoginUser} from '../../api/auth';
import {RootState} from '../store';

export const AUTH_USER_KEY = 'authUser';
export const ACTION_AUTH_LOGIN = 'auth/loginUser';
const LOGIN_ERROR_MESSAGE = 'Failed to login user.';

export type AuthUserLoginPayload = {email: string; password: string};

export type LogUserError = {
  message: string;
};

export type AuthUser = {
  name: string;
};

export const STATUS_TYPE_LOADING = 'loading';
export const STATUS_TYPE_IDLE = 'idle';

export type AuthUserState = {
  authUser: AuthUser | null;
  error?: LogUserError | null;
  status?: typeof STATUS_TYPE_LOADING | typeof STATUS_TYPE_IDLE;
};

const initialState: AuthUserState = {
  authUser: null,
  error: null,
  status: 'idle',
};

export const loginUser = createAsyncThunk<
  AuthUser,
  AuthUserLoginPayload,
  {rejectValue: LogUserError}
>(ACTION_AUTH_LOGIN, async (payload: AuthUserLoginPayload, thunkApi: any) => {
  const {user, error} = await firebaseLoginUser(payload);

  if (error) {
    return thunkApi.rejectWithValue({
      message: LOGIN_ERROR_MESSAGE,
    });
  }

  return {name: user?.displayName};
});

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

export const authAction = authUserSlice.actions;

export const selectStatus = (state: RootState): string | undefined =>
  state.authUser.status;

export default authUserSlice.reducer;
