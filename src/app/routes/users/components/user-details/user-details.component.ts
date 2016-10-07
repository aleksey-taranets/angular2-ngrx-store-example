import '@ngrx/core/add/operator/select';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { AppState, getState } from '../../../../reducers';
import { UsersActions } from "../../../../actions";
import { Store } from '@ngrx/store';
import { User } from "../../../../models/users";



@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  user: User;

  constructor(
    private route: ActivatedRoute,
    private store: Store<AppState>,
    private usersActions: UsersActions,
  ) {
    store.subscribe(s => this.user = s.user);
  }

  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      let user = getState(this.store).user;
      if (params['id'] && (!user || !user.login !== params['id'])) {
        this.store.dispatch(this.usersActions.loadUser(params['id']));
      }
    });
  }

}
