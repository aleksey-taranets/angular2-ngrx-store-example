import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {
  RepositoriesComponent,
  RepositoryComponent
} from './components';

export const repositoriesRoutes: Routes = [
  { path: 'repositories', component: RepositoriesComponent },
  { path: 'repositories/:id', component: RepositoryComponent }
];
export const repositoriesProviders = [];

export const repositoriesRouting: ModuleWithProviders = RouterModule.forChild(repositoriesRoutes);
