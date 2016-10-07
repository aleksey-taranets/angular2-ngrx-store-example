import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';

@Injectable()
export class UsersActions {
  static LOAD_USERS = '@users/LOAD_USERS';
  loadUsers(): Action {
    return {
      type: UsersActions.LOAD_USERS
    };
  }

  static SET_USERS = '@users/SET_USERS';
  setUsers(users): Action {
    return {
      type: UsersActions.SET_USERS,
      payload: users
    };
  }

  static LOAD_USER = '@users/LOAD_USER';
  loadUser(userId: string): Action {
    return {
      type: UsersActions.LOAD_USER,
      payload: userId
    };
  }

  static SET_USER = '@users/SET_USER';
  setUser(user): Action {
    return {
      type: UsersActions.SET_USER,
      payload: user
    };
  }
}