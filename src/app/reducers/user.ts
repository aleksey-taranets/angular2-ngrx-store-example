import { Action } from '@ngrx/store';
import * as _ from 'lodash';

import { User } from '../models';
import { UsersActions } from '../actions';

export type UserState = User;

const initialState: UserState = {
  login: '',
  url: '',
  repos: 0,
  followers: 0,
  loading: false,
};

export default function (state = initialState, action: Action): UserState {
  switch (action.type) {
    case UsersActions.LOAD_USER: {
      return { loading: true };
    }
    case UsersActions.SET_USER: {
      return _.assign({}, { loading: false } , action.payload);
    }
    default: {
      return state;
    }
  }
}
