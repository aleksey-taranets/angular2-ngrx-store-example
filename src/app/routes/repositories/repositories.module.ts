import { NgModule } from '@angular/core';

import { RepositoriesComponent, RepositoryComponent } from './components';
import { repositoriesRouting } from './repositories.routing';

@NgModule({
  declarations: [
    RepositoriesComponent,
    RepositoryComponent,
  ],
  imports: [
    repositoriesRouting
  ],
  providers: []
})
export class RepositoriesModule { }
