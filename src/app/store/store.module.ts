import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { ModelModule } from "../model/model.module";

import { RouterModule } from "@angular/router";
import { HomeComponent } from "./home.component";
import { FooterComponent } from "./footer.component";
import { BookingComponent } from "./booking.component";
import { MovieDetails } from "./movie-details.component";

@NgModule({
  declarations: [
   HomeComponent,
   FooterComponent,
   BookingComponent,
   MovieDetails
  ],
  imports: [ModelModule, BrowserModule, FormsModule, RouterModule],
  exports: [HomeComponent],
})
export class StoreModule {}
