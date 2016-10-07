import { Injectable } from '@angular/core';
import { Store } from "@ngrx/store";
import { Effect, Actions } from '@ngrx/effects';
import 'rxjs/add/operator/switchMap';

import { AppState, getState } from '../reducers';
import { UsersActions } from '../actions';
import { ApiService } from '../services';

@Injectable()
export class UsersEffects {
  constructor (
    private store: Store<AppState>,
    private update$: Actions,
    private usersActions: UsersActions,
    private api: ApiService,
  ) {}

  @Effect() loadUsers$ = this.update$
    .ofType(UsersActions.LOAD_USERS)
    .switchMap(() => {
      const currentFilter = getState(this.store).users.filter;
      return this.api.loadUsers(currentFilter);
    })
    .map(users => this.usersActions.setUsers(users));

  @Effect() loadUser$ = this.update$
    .ofType(UsersActions.LOAD_USER)
    .map(action => action.payload)
    .switchMap(userId => this.api.loadUser(userId))
    .map(user => this.usersActions.setUser(user));

}