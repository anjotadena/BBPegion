import {createSlice} from '@reduxjs/toolkit';

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

const authUserSlice = createSlice({
  name: 'authUser',
  initialState,
  reducers: {},
});

export default authUserSlice.reducer;
