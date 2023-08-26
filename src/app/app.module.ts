import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './store/home.component';
import { StoreModule } from './store/store.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    StoreModule,
    RouterModule.forRoot([
    { path: 'camtMajor', component: HomeComponent },
    { path: '**', redirectTo: '/camtMajor' }
  ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
