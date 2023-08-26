import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { RouterModule } from "@angular/router";

import { StoreModule } from "./store/store.module";
import { HomeComponent } from "./store/home.component";


@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    StoreModule,
    RouterModule.forRoot([
      { path: "home", component: HomeComponent },
      { path: "**", redirectTo: "/home" },
    ]),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
