import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';

import { UsersComponent, UserDetailsComponent } from './components';
import { usersRouting } from './users.routing';

@NgModule({
  declarations: [
    UsersComponent,
    UserDetailsComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule.forRoot(),
    usersRouting
  ],
  providers: []
})
export class UsersModule { }
