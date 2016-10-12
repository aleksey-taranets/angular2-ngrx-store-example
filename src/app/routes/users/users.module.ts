import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '@angular/material';

import { UsersComponent, UserDetailsComponent } from './components';
import { usersRouting } from './users.routing';
import { UsersFilterComponent } from './components/users-filter/users-filter.component';

@NgModule({
  declarations: [
    UsersComponent,
    UserDetailsComponent,
    UsersFilterComponent,
  ],
  imports: [
    FormsModule,
    CommonModule,
    MaterialModule.forRoot(),
    usersRouting
  ],
  providers: []
})
export class UsersModule { }
