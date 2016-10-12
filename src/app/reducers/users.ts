import { Action } from '@ngrx/store';
import * as _ from 'lodash';

import { Users } from '../models';
import { UsersActions } from '../actions';

export type UsersState = Users;

const initialState: UsersState = {
  users: [],
  loading: false,
  filter: {
    'in': '',
    language: '',
    location: '',
    repos: 0,
    followers: 1000
  }
};

export default function (state = initialState, action: Action): UsersState {
  switch (action.type) {
    case UsersActions.LOAD_USERS: {
      return _.assign({}, state, { loading: true });
    }
    case UsersActions.SET_USERS: {
      return _.assign({}, state, { loading: false, users: action.payload });
    }
    case UsersActions.SET_FILTER: {
      return _.assign({}, state, {
        filter: _.assign({}, state.filter, action.payload)
      });
    }
    default: {
      return state;
    }
  }
}
