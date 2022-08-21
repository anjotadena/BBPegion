import {STATUS_TYPE_IDLE} from './index.constant';
import {AuthUserState} from './index.type';

export const initialState: AuthUserState = {
  authUser: null,
  error: null,
  status: STATUS_TYPE_IDLE,
};
