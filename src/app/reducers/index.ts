import '@ngrx/core/add/operator/select';
import { compose } from '@ngrx/core/compose';
import { storeLogger } from 'ngrx-store-logger';
import { combineReducers, Store } from '@ngrx/store';

import usersReducer, * as fromUsersState from './users';
import userReducer, * as fromUserState from './user';

export interface AppState {
  users: fromUsersState.UsersState;
  user: fromUserState.UserState;
};

//uncomment the storeLogger import and this line
//and comment out the other export default line to turn on
//the store logger to see the actions as they flow through the store
//turned this off by default as i found the logger kinda noisy

//export default compose(storeLogger(), combineReducers)({
export default compose(storeLogger(), combineReducers)({
  users: usersReducer,
  user: userReducer,
});

import 'rxjs/add/operator/take';
export function getState(store: Store<AppState>): AppState {
  let state: AppState;
  store.take(1).subscribe(s => state = s);
  return state;
}