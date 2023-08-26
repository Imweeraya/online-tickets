import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { ModelModule } from "../model/model.module";

import { RouterModule } from "@angular/router";
import { HomeComponent } from "./home.component";

@NgModule({
  declarations: [
   HomeComponent
  ],
  imports: [ModelModule, BrowserModule, FormsModule, RouterModule],
  exports: [HomeComponent],
})
export class StoreModule {}
