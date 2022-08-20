import {createSlice} from '@reduxjs/toolkit';

export const AUTH_USER_KEY = 'authUser';

export type AuthUser = {
  name: string;
};

export type AuthUserState = {
  authUser: AuthUser | null;
  loading: boolean;
};

const initialState: AuthUserState = {
  authUser: null,
  loading: false,
};

// export const setAuthUser = createAsyncThunk<{authUser: AuthUser}>(
//   'setAuthUser'
// );

const authUserSlice = createSlice({
  name: AUTH_USER_KEY,
  initialState,
  reducers: {},
});

export default authUserSlice.reducer;
