import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState, getState } from '../../../../reducers';
import { UsersActions } from "../../../../actions";
import { UsersFilter } from "../../../../models/users";

@Component({
  selector: 'users-filter',
  templateUrl: './users-filter.component.html',
  styleUrls: ['./users-filter.component.css']
})
export class UsersFilterComponent implements OnInit {

  filter: UsersFilter;

  constructor(
    private store: Store<AppState>,
    private usersActions: UsersActions,
  ) {
    this.filter = getState(this.store).users.filter;
  }

  onSubmit () {
    this.store.dispatch(this.usersActions.setFilter(this.filter));
  }

  ngOnInit() { }

}
