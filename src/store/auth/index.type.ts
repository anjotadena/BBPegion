import {STATUS_TYPE_IDLE, STATUS_TYPE_LOADING} from './index.constant';

export type AuthUserLoginPayload = {email: string; password: string};

export type AuthLoginUserError = {
  message: string;
};

export type AuthUser = {
  name: string;
};

export type AuthUserState = {
  authUser: AuthUser | null;
  error?: AuthLoginUserError | null;
  status?: typeof STATUS_TYPE_LOADING | typeof STATUS_TYPE_IDLE;
};
