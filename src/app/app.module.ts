import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { AppComponent } from './core';
import { UsersModule, RepositoriesModule } from './routes';
import { routing } from './app-routing.module';
import { ApiService } from './services';

import {
  UsersActions
} from './actions';
import {
  UsersEffects
} from './side-effects';
import reducers from './reducers';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule.forRoot(),
    StoreModule.provideStore(reducers),
    EffectsModule.run(UsersEffects),
    BrowserModule,
    FormsModule,
    HttpModule,
    UsersModule,
    RepositoriesModule,
    routing
  ],
  providers: [
    UsersActions,
    ApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
