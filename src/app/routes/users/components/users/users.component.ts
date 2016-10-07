import '@ngrx/core/add/operator/select';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState, getState } from '../../../../reducers';
import { UsersActions } from "../../../../actions";
import { Observable } from "rxjs/Observable";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: Observable<any>;

  constructor(
    private store: Store<AppState>,
    private usersActions: UsersActions,
  ) {
    this.users = store.select('users');
  }

  ngOnInit() {
    if (!getState(this.store).users.users.length) {
      this.store.dispatch(this.usersActions.loadUsers());
    }
  }

}
