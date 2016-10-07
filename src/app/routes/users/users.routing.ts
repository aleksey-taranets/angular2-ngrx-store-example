import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {
  UsersComponent,
  UserDetailsComponent
} from './components';

export const usersRoutes: Routes = [
  { path: 'users', component: UsersComponent },
  { path: 'users/:id', component: UserDetailsComponent }
];
export const usersProviders = [];

export const usersRouting: ModuleWithProviders = RouterModule.forChild(usersRoutes);
