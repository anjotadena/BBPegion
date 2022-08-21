import {createAsyncThunk} from '@reduxjs/toolkit';
import {ACTION_AUTH_LOGIN, LOGIN_ERROR_MESSAGE} from './index.constant';
import {AuthLoginUserError, AuthUser, AuthUserLoginPayload} from './index.type';

import {loginUser as firebaseLoginUser} from '../../api/auth';

export const loginUser = createAsyncThunk<
  AuthUser,
  AuthUserLoginPayload,
  {rejectValue: AuthLoginUserError}
>(ACTION_AUTH_LOGIN, async (payload: AuthUserLoginPayload, thunkApi: any) => {
  const {user, error} = await firebaseLoginUser(payload);

  if (error) {
    return thunkApi.rejectWithValue({
      message: LOGIN_ERROR_MESSAGE,
    });
  }

  return {name: user?.displayName};
});
